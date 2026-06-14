
from pydantic import BaseModel, ConfigDict


from src.bookmyvenue.schema.user.user import UserSchema

class BaseResponceClass(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    status_code:int
    message:str

class UserCreatedResponce(BaseResponceClass):
    model_config = ConfigDict(from_attributes=True)
    data: UserSchema

class UserUpdatedResponce(BaseResponceClass):
    responce_type:str = "ResourceUpdated"

class HealthStatusResponce(BaseResponceClass):
    status_code:int
    message:str

class UserNotFoundResponce(BaseResponceClass):
    responce_type:str = "NotFound"

class UserNotAuthenticatedResponce(BaseResponceClass):
    responce_type:str = "Unauthorized"