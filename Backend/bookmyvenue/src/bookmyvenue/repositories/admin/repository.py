from fastapi import HTTPException,status
import structlog
from typing import Optional
from sqlalchemy.orm import Session

from src.bookmyvenue.schema.responce.responces import UserNotFoundResponce
from src.bookmyvenue.schema.user.user import PhoneOnboardingSchema
from src.bookmyvenue.models.user import User
from src.bookmyvenue.models.admin import Admin

logger = structlog.get_logger()
class AdminRepository:
    def get_the_admin_by_user(self, db:Session, clerk_id:str) -> Optional[Admin]:
        clerk_user = db.query(User).filter_by(clerkUserID=clerk_id).first()  #filter based search is fast for getting a spevific element
        if not clerk_user:
            logger.error("user record not found for checking whether he/she is admin" ,clerk_id=clerk_id)
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="user not found in DB")
        return db.query(Admin).filter_by(user=clerk_user).first()

    
            
adminRepository = AdminRepository()