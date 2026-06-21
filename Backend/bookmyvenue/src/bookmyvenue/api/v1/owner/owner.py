from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from dotenv import load_dotenv
import structlog
from src.bookmyvenue.schema.owner.owner import OwnerOnboardingSchema
from src.bookmyvenue.schema.responce.responces import UserCreatedResponce, UserUpdatedResponce
from src.bookmyvenue.api.deps import  get_the_current_user, get_the_db_Session
from src.bookmyvenue.services.ownerServices import ownerservice


load_dotenv()
logger = structlog.get_logger()


router = APIRouter(
    prefix='/owner'  #the prefix that joins `api/v1` prefix with api/v1/user + / => api/v1/user/
)  #this is used to create the routes with reference of app in the main.py of src folder

@router.get('/check')
def check_owner_profile(
    db:Session = Depends(get_the_db_Session),
    current_user_id:str = Depends(get_the_current_user)
):
    
    ownerservice.get_owner_record(db,current_user_id)
    logger.info(f"Owner has onboarded!" , clerk_id=current_user_id)
    return UserUpdatedResponce(status_code=200,message="Owner has onboarded!")
   
    




@router.post('/onboarding')
def complete_onboarding(
    onboard:OwnerOnboardingSchema, 
    db:Session = Depends(get_the_db_Session),
    current_user_id:str = Depends(get_the_current_user)
):
    
    ownerservice.complete_owner_onboarding(db,current_user_id,onboard)
    logger.info(f"onboarded the owner successfully" , clerk_id=current_user_id)
    return UserUpdatedResponce(status_code=200,message="successfully updated the profile")

