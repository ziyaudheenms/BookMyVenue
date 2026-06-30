from celery import Celery
from src.bookmyvenue.core.config import settings


app = Celery(
    app_name="bookmyvenue",
    broker="rediss://default:gQAAAAAAAl4HAAIgcDE0MGU2MGFkMmExODM0MWZlYjcxODVkNDUwODkzODE4ZQ@desired-silkworm-155143.upstash.io:6379",
    backend="rediss://default:gQAAAAAAAl4HAAIgcDE0MGU2MGFkMmExODM0MWZlYjcxODVkNDUwODkzODE4ZQ@desired-silkworm-155143.upstash.io:6379",
)

#auto-discover is used to look into the tasks.py files present inside the src.bookmyvenue package which may contain many other sub modules.
app.autodiscover_tasks(
    packages=["src.bookmyvenue.services"],
    related_name="*task"
)

app.conf.update(
    task_track_started=True,
    task_serializer="json",
    result_serializer="json",
    accept_content=["json"],
    broker_use_ssl={"ssl_cert_reqs": 0},
    redis_backend_use_ssl={"ssl_cert_reqs": 0},
)