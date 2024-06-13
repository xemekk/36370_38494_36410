from fastapi import APIRouter, HTTPException

from app.products.dao import ProductsDAO
from app.products.schemas import SProducts

router = APIRouter(
    prefix="/products",
    tags=["Products"]
)

@router.get("")
async def get_products() -> list[SProducts]:
    return await ProductsDAO.find_all()

@router.get("/{product_id}")
async def get_product_by_id(product_id: int) -> SProducts:
    result = await ProductsDAO.find_by_id(product_id)
    if result is None:
        raise HTTPException(status_code=404, detail="Product nie znaleziono")
    return result

@router.get("/name/{product_name}")
async def get_product_by_name(product_name: str) -> SProducts:
    result = await ProductsDAO.find_one_or_none(name=product_name)
    if result is None:
        raise HTTPException(status_code=404, detail="Product nie znaleziono")
    return result

@router.post("")
async def add_product(name: str, calories: int, carbs: float = None, protein: float = None, fat: float = None):
    await ProductsDAO.add(name=name, calories=calories, carbs=carbs, protein=protein, fat=fat)

@router.delete("/{product_id}")
async def delete_product_by_id(product_id: int):
    result = await ProductsDAO.delete(product_id)
    if result is None:
        raise HTTPException(status_code=404, detail="Product nie znaleziono")
    return result

