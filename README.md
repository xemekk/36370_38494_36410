## Calorie Calculator

![Logo](https://i.imgur.com/OOtPQvD.png)

Application for calculating calories that allows adding food items to a database and calculating the total number of calories based on the consumed products.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/xemekk/36370_38494_36410.git
```

2. Navigate to the project directory:

```bash
cd 36370_38494_36410
```

3. Create a Virtual Environment and install dependencies:

```bash
python -m venv env
pip install -r requirements.txt
cd ../client
npm install
```

## Run locally

Start the backend server:

```bash
alembic upgrade head
uvicorn app.main:app
```

Start the frontend development server:

```bash
cd client
npm run dev
```

Open your browser and navigate to `http://localhost:5173/` to access the application.

## Functionalities

### Calculator

App allows you to calculate total amount of calories consumed(with nutrients breakdown) based on the list of products provided. You're required to specify product name and weight in grams and press "Check" button.

![Calculator](https://i.imgur.com/GQwUz7K.png)

### Products list

App allows you to check all products that were added to the database. The results are presented in a grid style UI.

![ProductsList](https://i.imgur.com/ViqpVto.png)

### Product Form

App allows you to add new products to the database, you need to fill a product form and provide its name, calories, and nutrients

![ProductForm](https://i.imgur.com/oDXHceZ.png)

## API Reference

#### Get all products

```http
  GET /products
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |
| None      |      |             |

#### Add product

```http
  POST /products
```

| Parameter  | Type     | Description                              |
| :--------- | :------- | :--------------------------------------- |
| `name`     | `string` | **Required**. Name of product to add     |
| `calories` | `string` | **Required**. Calories of product to add |
| `carbs`    | `string` | Carbs of product to add                  |
| `protein`  | `string` | Protein of product to add                |
| `fat`      | `string` | Fat of product to add                    |

#### Get product by ID

```http
  GET /products/id/{product_id}
```

| Parameter  | Type     | Description                          |
| :--------- | :------- | :----------------------------------- |
| product_id | `string` | **Required**. ID of product to query |

#### Get product by name

```http
  GET /products/id/{product_name}
```

| Parameter    | Type     | Description                            |
| :----------- | :------- | :------------------------------------- |
| product_name | `string` | **Required**. Name of product to query |

#### Get multiple products by names

```http
  GET /products/by_names
```

| Parameter | Type            | Description                                               |
| :-------- | :-------------- | :-------------------------------------------------------- |
| names     | `array[string]` | **Required**. Array containing names of products to query |

#### Delete product with specific ID

```http
  DELETE /products/{product_id}
```

| Parameter  | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| product_id | `string` | **Required**. ID of product to delete |

## Authors

- Ihor Tiuniaiev - numer albumu: 38494
- Daniel Tokaj - numer albumu: 36410
- Adrian Poniewozik - numer albumu: 36370
