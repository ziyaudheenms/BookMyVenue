
from typing import List
from sqlalchemy import Column, ForeignKey, Table
from sqlalchemy.orm import Mapped, mapped_column, relationship
from src.bookmyvenue.core.database import Base

venue_category_table = Table(
    "venue_category_table",
    Base.metadata,
    Column("venue_id", ForeignKey("venues.id"), primary_key=True),
    Column("category_id", ForeignKey("categories.id"), primary_key=True),
)

venue_amenity_table = Table(
    "venue_amenity_table",
    Base.metadata,
    Column("venue_id", ForeignKey("venues.id"), primary_key=True),
    Column("amenity_id", ForeignKey("amenities.id"), primary_key=True),
)


class Venue(Base):
    __tablename__ = "venues"

    id: Mapped[int] = mapped_column( primary_key=True , index=True , nullable=False , autoincrement=True)
    categories: Mapped[List['Category']] = relationship(
        secondary=venue_category_table,
        back_populates='venues'
    )
    amenities: Mapped[List['Amenity']] = relationship(
        secondary=venue_amenity_table,
        back_populates='venues'
    )