from pydantic import BaseModel, EmailStr
from typing import List, Dict, Any, Optional

class ClerkEmailAddress(BaseModel):
    email_address: EmailStr
    id: str

class ClerkWebhookData(BaseModel):
    id: str  # This is the Clerk User ID (e.g., user_2F...)
    email_addresses: List[ClerkEmailAddress]
    first_name: Optional[str] = None
    username: Optional[str] = None
    last_name: Optional[str] = None
    image_url: Optional[str] = None
    primary_email_address_id: Optional[str] = None
    profile_image_url: Optional[str] = None

class ClerkWebhookEvent(BaseModel):
    data: ClerkWebhookData
    object: str  # Will be "event"
    type: str    # e.g., "user.created" or "user.updated"