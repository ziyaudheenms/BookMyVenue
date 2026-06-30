"""added the task_status for tracking the table's current status

Revision ID: 7b82e7eec43c
Revises: 7dc62ed38491
Create Date: 2026-06-30 06:45:54.074025

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7b82e7eec43c'
down_revision: Union[str, Sequence[str], None] = '7dc62ed38491'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
