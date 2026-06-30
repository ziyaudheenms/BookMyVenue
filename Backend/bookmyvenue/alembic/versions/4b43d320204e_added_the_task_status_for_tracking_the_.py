"""added the task_status for tracking the table's current status

Revision ID: 4b43d320204e
Revises: 81aecfca615f
Create Date: 2026-06-30 08:17:03.304657

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '4b43d320204e'
down_revision: Union[str, Sequence[str], None] = '81aecfca615f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
