from fastapi import HTTPException,status
import structlog
from typing import Optional
from sqlalchemy.orm import Session

from src.bookmyvenue.schema.owner.owner import OwnerOnboardingSchema
from src.bookmyvenue.schema.responce.responces import UserNotFoundResponce
from src.bookmyvenue.schema.user.user import PhoneOnboardingSchema
from src.bookmyvenue.models.user import User
from src.bookmyvenue.models.owners import Owner

logger = structlog.get_logger()

class OwnerRepository:
    def get_owner_record_by_ID(self, db:Session, current_user_id:str) -> Optional[Owner]:
       return db.query(Owner).join(User).filter(User.clerkUserID == current_user_id).first()
    
    def get_owner_record(self, db:Session,clerk_user:User) -> Optional[Owner]:
        return db.query(Owner).filter_by(user=clerk_user).first()
    
    def onboard_owner(self, db:Session,clerk_user:User, onboard:OwnerOnboardingSchema) -> Owner:
        logger.info("creating the owner record forthe user" , userid = clerk_user.id)
        owner = Owner(
            user = clerk_user,
            profession = onboard.profession,
            promise = onboard.promise,
            intro_descp = onboard.self_info,
            organization = onboard.organization
        )
        db.add(owner)
        db.commit()
        db.refresh(owner)
        return owner

ownerRepository = OwnerRepository()