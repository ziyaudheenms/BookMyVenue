import structlog
from fastapi import FastAPI, Response

from src.bookmyvenue.schema.responce.responces import HealthStatusResponce
from src.bookmyvenue.core.logging import setup_logging
from src.bookmyvenue.core.middleware.logging import LoggingContextMiddleware
from src.bookmyvenue.api.v1.users import users

setup_logging()
logger = structlog.get_logger()
app = FastAPI()
app.add_middleware(LoggingContextMiddleware)



@app.get('/health-check')
def start():
    logger.info("the server is running strong")
    return HealthStatusResponce(message="server cooking well!" , status_code=200)

#Including the apis used in the project
app.include_router(users.router , prefix='/api/v1')

def main():
    print("Hello from bookmyvenue!")


if __name__ == "__main__":
    main()
