"""add_venue_price_manager_trigger

Revision ID: 624d080d4a6f
Revises: 2e6f302c4916
Create Date: 2026-06-27 21:47:40.783758

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '624d080d4a6f'
down_revision: Union[str, Sequence[str], None] = '2e6f302c4916'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute("""
        CREATE OR REPLACE FUNCTION create_venue_price_manager()
        RETURNS TRIGGER AS $$
        BEGIN
            -- 'NEW' holds the data row that was just inserted into the 'venues' table
            INSERT INTO price_manager (venue_id, standerd_price)
            VALUES (NEW.id, 1000);
            
            -- Triggers must always return the NEW record on success
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
    """)

    op.execute("""
        CREATE TRIGGER trigger_create_venue_price_manager
        AFTER INSERT ON venues
        FOR EACH ROW
        EXECUTE FUNCTION create_venue_price_manager();
    """)


def downgrade() -> None:
   
   op.execute("DROP TRIGGER IF EXISTS trigger_create_venue_price_manager ON venues;")
   op.execute("DROP FUNCTION IF EXISTS create_venue_price_manager();")
