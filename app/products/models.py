from app.database import Base
from sqlalchemy import Column, Integer, String, Float

class Products(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    calories = Column(Integer, nullable=False)
    carbs = Column(Float)
    protein = Column(Float)
    fat = Column(Float)