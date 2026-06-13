from email import message

from pydantic import BaseModel
from typing import Generic, TypeVar, Optional, Any

T = TypeVar("T")

class UserCreatedResponce(BaseModel, Generic[T]):
    status_code: int
    message: str
    data: Optional[T] = None

class HealthStatusResponce(BaseModel):
    status_code: int
    message:str
