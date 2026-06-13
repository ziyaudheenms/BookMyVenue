import structlog
from typing import Optional
from sqlalchemy.orm import Session

from src.bookmyvenue.models.user import User

logger = structlog.get_logger()
class UserRepository:
    def get_user_by_id(self, db:Session, clerk_id:str) -> Optional[User]:
        return db.query(User).filter_by(clerkUserID=clerk_id).first()  #filter based search is fast for getting a spevific element

    def create_clerk_user(self, db:Session, clerk_id:str, email:str, fullname:str, username:str) -> User:
        logger.info("registering the user " , clerk_id=clerk_id, email = email)
        dbOject = User(
            clerkUserID=clerk_id,
            email=email,
            username=username,
            fullname=fullname,
        )
        db.add(dbOject)
        logger.info("commiting the user to DB" , clerk_id=clerk_id, email = email)
        db.commit()
        db.refresh(dbOject)
        logger.info("created the user in DB" , clerk_id=clerk_id, email = email)
        return dbOject

userRepository = UserRepository()