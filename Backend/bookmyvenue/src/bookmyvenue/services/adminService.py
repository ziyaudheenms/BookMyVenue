from typing import List, Optional
import uuid

from fastapi import HTTPException, status
import structlog
from sqlalchemy.orm import Session


from src.bookmyvenue.schema.admin import admin
from src.bookmyvenue.models.owners import Owner
from src.bookmyvenue.models.user import User
from src.bookmyvenue.repositories.users.repository import userRepository
from src.bookmyvenue.repositories.owner.repository import ownerRepository
from src.bookmyvenue.repositories.admin.repository import adminRepository
from src.bookmyvenue.schema.user import user
from src.bookmyvenue.schema.owner import owner


logger = structlog.get_logger()

class AdminService:
    def add_category(self, db:Session, categories: List[admin.CategorySchema]):
        #check if that same category exists , if so raise error

        existing_categories = adminRepository.check_the_existing_category(db, categories)  
        if existing_categories:
            logger.error("some of the categories already exists" ,exisiting_categories=existing_categories)
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="some of the categories already exists")
        
        return adminRepository.add_the_categories(db, categories)
    
    def add_amenity(self, db:Session, amenities: List[admin.AmenitySchema]):
        #check if that same category exists , if so raise error

        existing_categories = adminRepository.check_the_existing_amenity(db, amenities)  
        if existing_categories:
            logger.error("some of the amenities already exists" ,exisiting_categories=existing_categories)
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="some of the amenities already exists")
        
        return adminRepository.add_the_amenities(db, amenities)
        

        
       
    

adminservice = AdminService()