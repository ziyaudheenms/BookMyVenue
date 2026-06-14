import os
from dotenv import load_dotenv
from fastapi import Depends, HTTPException, Request, status
from clerk_backend_api import Clerk
from clerk_backend_api.security import authenticate_request
from clerk_backend_api.security.types import AuthenticateRequestOptions

from src.bookmyvenue.schema.responce.responces import UserNotAuthenticatedResponce
from src.bookmyvenue.core.database import session
from src.bookmyvenue.repositories.users.repository import userRepository

load_dotenv()

clerk_SDK = Clerk(bearer_auth=os.getenv("CLERK_API_KEY"))  

def get_the_db_Session():
    db = session()  #generating the new sectio
    try:
        yield db #yield is used to get the current session pause the function pass the session to the respective function calling the db session and once it completes the job the contol comes back here and closes the connection
    finally:
        db.close()



# this function is used to check the incoming request with siginied in or not
def get_the_current_user(request: Request) :

    request_state = clerk_SDK.authenticate_request(
        request,
        AuthenticateRequestOptions(
            authorized_parties=['http://localhost:3000']
        )
    )

    if not request_state.is_signed_in:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="user is not signed in")
    else:
        request_payload = request_state.payload
        user_id = request_payload['sub']  # user ID
        return user_id

