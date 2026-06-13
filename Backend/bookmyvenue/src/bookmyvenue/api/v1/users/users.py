import os
from fastapi import APIRouter, Depends, HTTPException, Request, Header
from sqlalchemy.orm import Session
from dotenv import load_dotenv
from svix.webhooks import Webhook, WebhookVerificationError
import structlog
from src.bookmyvenue.schema.responce.responces import UserCreatedResponce
from src.bookmyvenue.schema.user.user import ClerkWebhookEvent
from src.bookmyvenue.api.deps import get_the_db_Session
from src.bookmyvenue.services.userServices import userservice


load_dotenv()
logger = structlog.get_logger()
WEBHOOK_CLERK_SECRET = os.getenv('CLERK_WEBHOOK_SECRET') or ''

router = APIRouter(
    prefix='/user'  #the prefix that joins `api/v1` prefix with api/v1/user + / => api/v1/user/
)  #this is used to create the routes with reference of app in the main.py of src folder


@router.get("/")
def home():
    logger.info(
            "Attempting to sync Clerk user to database", 
            clerk_id=1,
            email="test@gmail"
        )
    
    return {
        "hello" : "world"
    }
    



@router.post('/webhook/create-user')  #this route is used to register the user with the weebhook comming from clerk
async def clerk_webhook_handler(
    request: Request,
    db: Session = Depends(get_the_db_Session),
    svix_id: str = Header(None, alias="svix-id"),
    svix_signature: str = Header(None, alias="svix-signature"),
    svix_timestamp: str = Header(None, alias="svix-timestamp"),
): #Dependency injection in which the DB  session is been needed for thos endpoimt
    

    if not svix_id or not svix_signature or not svix_timestamp:
        logger.error("Missing required Svix headers")
        raise HTTPException(status_code=400, detail="Missing required Svix headers")
    
    payload = await request.body() #getting the webhook data that is been send
    payload_str = payload.decode("utf-8") #stringfiying it

    try:
        wh = Webhook(WEBHOOK_CLERK_SECRET)
        headers = {
            "svix-id": svix_id,
            "svix-signature": svix_signature,
            "svix-timestamp": svix_timestamp,
        }
        # This will raise an exception if the signature is invalid or forged
        wh.verify(payload_str, headers)
    except WebhookVerificationError as e:
        logger.error("Invalid signature validation failed")
        raise HTTPException(status_code=401, detail="Invalid signature validation failed")
   
    try:
        event = ClerkWebhookEvent.model_validate_json(payload_str)  #used to validate the incoming json with the pydantic model we defined
    except Exception as e:
        logger.error(f"Unparseable Clerk event data: {str(e)}")
        raise HTTPException(status_code=422, detail=f"Unparseable Clerk event data: {str(e)}")

    new_user = None
    if event.type == "user.created":
        new_user = userservice.register_user(db=db,clerk_user=event.data)
    
    return UserCreatedResponce(
        status_code=201,
        message="new user generated successfully",
        data=new_user
    )

   

     