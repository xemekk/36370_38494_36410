def calculate_calories(products: dict) -> int:
    #example products = {'apple': 150} -> name: wieght

    products_info = get_products_info(products.keys())
    total_calories = 0
    for product in products_info:
        weight = products[product['name']]
        total_calories += product['cal'] * weight
    return total_calories

def calculate_nutrients(products: dict) -> dict:
    #example products = {'apple': 150} -> name: wieght

    products_info = get_products_info(products.keys())
    total_nutrients = defaultdict(float)
    for product in products_info:
        weight = products[product['name']]
        for key, value in product.items():
            if isinstance(value, (int, float)):
                total_nutrients[key] += value * weight
    return dict(total_nutrients)
