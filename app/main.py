from fastapi import FastAPI

from app.products.router import router as router_products

app = FastAPI()

app.include_router(router_products)
