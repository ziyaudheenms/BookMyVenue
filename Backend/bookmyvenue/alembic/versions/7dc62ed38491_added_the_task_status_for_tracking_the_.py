"""added the task_status for tracking the table's current status

Revision ID: 7dc62ed38491
Revises: 3c0dfc0f26d0
Create Date: 2026-06-30 06:43:22.772750

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7dc62ed38491'
down_revision: Union[str, Sequence[str], None] = '3c0dfc0f26d0'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
