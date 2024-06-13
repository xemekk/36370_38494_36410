from typing import Optional

from pydantic import BaseModel

class SProducts(BaseModel):
    id: int
    name: str
    calories: int
    carbs: float
    protein: float
    fat: float

    class Config:
        orm_mode = True
