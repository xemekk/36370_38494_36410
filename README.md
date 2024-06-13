## Calorie Calculator

Aplikacja do obliczania kalorii, która pozwala dodawać produkty spożywcze do bazy danych i obliczać całkowitą liczbę kalorii na podstawie spożytych produktów spożywczych

## Installation

1. Clone the repository:

```bash
git clone https://github.com/xemekk/36370_38494_36410.git
```

2. Navigate to the project directory:

```bash
cd 36370_38494_36410
```

3. Install dependencies:

```bash
cd server
pip install -r requirements.txt
cd ../client
npm install
```

## Run locally

Start the backend server:

```bash
cd app
uvicorn app.main:app
```

Start the frontend development server:

```bash
cd client
npm run dev
```

Open your browser and navigate to `http://localhost:5173/` to access the application.

## Authors

- Ihor Tiuniaiev - numer albumu: 38494
- Daniel Tokaj - numer albumu: 36410
- Adrian Poniewozik - numer albumu: 36370
