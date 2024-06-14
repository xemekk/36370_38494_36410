import { useState } from "react";
import Button from "../components/ui/Button";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import qs from "qs";

function Calculator() {
  const [product, setProduct] = useState({ name: "", weight: "" });
  const [list, setList] = useState([]);
  const [nutrients, setNutrients] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAdd = () => {
    if (product.name && product.weight && !isNaN(product.weight)) {
      setList([...list, { ...product }]);
      setProduct({ name: "", weight: "" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const handleCheck = async () => {
    const names = list.map((item) => item.name);
    const weights = list.map((item) => parseFloat(item.weight));

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/products/by_names`,
        {
          params: { names },
          paramsSerializer: (params) =>
            qs.stringify(params, { arrayFormat: "repeat" }),
        }
      );

      console.log("API Response:", response.data);

      const products = response.data;

      const nutrientsList = products.map((product, index) => {
        const weight = weights[index];
        const nutrientInfo = {
          calories: (product.calories * weight) / 100,
          carbs: (product.carbs * weight) / 100,
          protein: (product.protein * weight) / 100,
          fat: (product.fat * weight) / 100,
        };
        return {
          name: product.name,
          nutrients: nutrientInfo,
        };
      });

      const totalNutrients = nutrientsList.reduce((acc, item) => {
        for (const [key, value] of Object.entries(item.nutrients)) {
          acc[key] = (acc[key] || 0) + value;
        }
        return acc;
      }, {});

      console.log("Nutrients List:", nutrientsList);
      console.log("Total Nutrients:", totalNutrients);

      setNutrients({ nutrientsList, totalNutrients });
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <div>
      <p className="text-center border-b-2">
        Type your product name and weight, then press enter or + to add it to
        the list. To remove item from the list, click on it.
      </p>

      <div className="flex justify-items-stretch py-2">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type product name..."
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AF8F6F]"
        />
        <input
          type="text"
          name="weight"
          value={product.weight}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type weight in grams..."
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AF8F6F] ml-2"
        />
        <button className="-m-12" onClick={handleAdd}>
          <FaPlus />
        </button>
      </div>

      <ul className="text-center">
        {list.map((item, index) => (
          <li
            className="border border-gray-500 max-w-lg content-center p-2 m-2 inline-block rounded-md"
            key={index}
            onClick={() => handleDelete(index)}
          >
            {item.name} ({item.weight}g)
          </li>
        ))}
      </ul>

      <div className="flex justify-end items-center">
        {list.length > 0 && <Button handleOnClick={handleCheck} text="Check" />}
      </div>

      {nutrients && (
        <div className="mt-4">
          <h3 className="text-center font-bold">Nutrient Breakdown</h3>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {nutrients.nutrientsList.map((product, index) => (
              <li key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">
                <h2 className="text-xl font-bold">{product.name}</h2>
                {Object.entries(product.nutrients).map(([key, value]) => (
                  <p key={key}>
                    {key}: {value.toFixed(2)}g
                  </p>
                ))}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-center font-bold">Total Nutrients</h3>
            <ul>
              {Object.entries(nutrients.totalNutrients).map(([key, value]) => (
                <li key={key}>
                  {key}: {value.toFixed(2)}g
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calculator;
