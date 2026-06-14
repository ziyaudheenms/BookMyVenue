from fastapi.responses import JSONResponse
import structlog
from fastapi import FastAPI, HTTPException, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from src.bookmyvenue.schema.responce.responces import HealthStatusResponce
from src.bookmyvenue.core.logging import setup_logging
from src.bookmyvenue.core.middleware.logging import LoggingContextMiddleware
from src.bookmyvenue.api.v1.users import users
from src.bookmyvenue.api.v1.owner import owner

setup_logging()
logger = structlog.get_logger()

app = FastAPI()
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            
    allow_credentials=True,           
    allow_methods=["*"],              
    allow_headers=["*"],             
)
app.add_middleware(LoggingContextMiddleware)



@app.exception_handler(HTTPException)
async def custom_http_exception_handler(request: Request, exc: HTTPException):
    
    origin = request.headers.get("origin")
    
    response = JSONResponse(
        status_code=exc.status_code,
        content={
            "status_code": exc.status_code,
            "message": exc.detail,
            "data": None
        }
    )
    
    # Manually re-attach headers so the browser doesn't block the error message
    if origin:
        response.headers["Access-Control-Allow-Origin"] = origin
        response.headers["Access-Control-Allow-Credentials"] = "true"
        response.headers["Access-Control-Allow-Methods"] = "*"
        response.headers["Access-Control-Allow-Headers"] = "*"
        
    return response



@app.get('/health-check')
def start():
    logger.info("the server is running strong")
    return HealthStatusResponce(message="  well!" , status_code=200)

#Including the apis used in the project
app.include_router(users.router , prefix='/api/v1')
app.include_router(owner.router , prefix='/api/v1')

def main():
    print("Hello from bookmyvenue!")


if __name__ == "__main__":
    main()
