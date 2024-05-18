def calculate_calories(products: dict):
    #example products = {'apple': 150} -> name: wieght

    products_info = get_products_info(products.keys())
    total_calories = 0
    for product in products_info:
        weight = products[product['name']]
        total_calories += product['cal'] * weight
    return total_calories
