from typing import Optional
import uuid

from fastapi import HTTPException, status
import structlog
from sqlalchemy.orm import Session


from src.bookmyvenue.models.owners import Owner
from src.bookmyvenue.models.user import User
from src.bookmyvenue.repositories.users.repository import userRepository
from src.bookmyvenue.repositories.owner.repository import ownerRepository
from src.bookmyvenue.schema.user import user
from src.bookmyvenue.schema.owner import owner


logger = structlog.get_logger()

class OwnerService:

    def get_owner_record(self, db:Session, current_user_id:str) -> Optional[Owner]:
       owner_profile = ownerRepository.get_owner_record_by_ID(db, current_user_id)
       if not owner_profile:
            logger.info(f"Owner Profile Not Found!" , clerk_id=current_user_id)
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Owner Profile not found!")
       return owner_profile

    
    def complete_owner_onboarding(self, db:Session, current_user_id:str, onboard:owner.OwnerOnboardingSchema) -> Owner:
        logger.info("trying to onboard owner" , clerk_id = current_user_id)
        current_user = userRepository.get_user_by_id(db, current_user_id)
        if not current_user:
            logger.error("user record not found" ,clerk_id=current_user_id)
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="user not found in DB")
        owner_record = ownerRepository.get_owner_record(db, current_user)
        if owner_record:
            logger.error("owner has already onboarded" ,clerk_id=current_user_id)
            raise HTTPException(status_code=status.HTTP_201_CREATED,detail="Owner onboadred completed!")
        
        owner_record = ownerRepository.onboard_owner(db,current_user,onboard)

        return owner_record
        
        
        
        
       
    

ownerservice = OwnerService()