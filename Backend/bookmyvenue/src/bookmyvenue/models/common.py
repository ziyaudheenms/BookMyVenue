from decimal import Decimal
from typing import List
from sqlalchemy import ARRAY, Boolean, Column, ForeignKey, Numeric, String, Table, Text
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
    owner_id: Mapped[int] = mapped_column(ForeignKey('owners.id'))
    owner: Mapped['Owner'] = relationship(back_populates="venues")
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    max_capacity: Mapped[int] = mapped_column(nullable=False, default=0)
    city: Mapped[str] = mapped_column(String(255), nullable=False)
    district: Mapped[str] = mapped_column(String(255), nullable=False)
    state: Mapped[str] = mapped_column(String(255), nullable=False)
    country: Mapped[str] = mapped_column(String(255), nullable=False)
    location_url: Mapped[str] = mapped_column(Text, nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    cover_image: Mapped[str] = mapped_column(Text, nullable=False, default='https://www.magnific.com/vectors/venue-booking')
    cancellation: Mapped[bool] = mapped_column(Boolean , default=False)
    cancellation_percentage: Mapped[int] = mapped_column( default=0)
    street_address: Mapped[str] = mapped_column(Text, nullable=False)
    minimum_slot_duration: Mapped[int] = mapped_column(default=2, nullable=False)
    cancellation_time_limit: Mapped[int] = mapped_column(default=0, nullable=False)
    total_reviews: Mapped[int] = mapped_column(default=0, nullable=False)
    overall_rating: Mapped[Decimal] = mapped_column(
        Numeric(precision=5,scale=2), #precision refers with the total numbers exist with scale which determines no of digits after decimal point
        default=Decimal("0.00"),
        nullable=False,
    )
    gallery: Mapped[List[str]] = mapped_column(ARRAY(String), default=list, nullable=False)
   
    def __repr__(self) -> str:
        return f"<Venue(id={self.id}, name={self.name!r})>"





    