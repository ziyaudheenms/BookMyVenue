from src.bookmyvenue.core.database import session


def get_the_db_Session():
    db = session()  #generating the new sectio
    try:
        yield db #yield is used to get the current session pause the function pass the session to the respective function calling the db session and once it completes the job the contol comes back here and closes the connection
    finally:
        db.close()
