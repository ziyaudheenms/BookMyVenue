"""added the price manager table

Revision ID: ff2a707b2b13
Revises: 624d080d4a6f
Create Date: 2026-06-28 14:22:56.805267

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'ff2a707b2b13'
down_revision: Union[str, Sequence[str], None] = '624d080d4a6f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
