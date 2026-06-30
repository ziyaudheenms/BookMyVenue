"""added the taskID in the venue table

Revision ID: 81aecfca615f
Revises: 7b82e7eec43c
Create Date: 2026-06-30 06:53:22.558232

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '81aecfca615f'
down_revision: Union[str, Sequence[str], None] = '7b82e7eec43c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
