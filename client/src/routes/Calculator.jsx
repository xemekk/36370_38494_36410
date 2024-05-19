import { useState } from "react";
import Button from "../components/ui/Button";
import { FaPlus } from "react-icons/fa";

function Calculator() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    value != "" ? setList([...list, value]) : setList([...list]);
    setValue("");
    console.log(list);
  };

  const handleCheck = () => {
    // Perform check logic here
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

  return (
    <div>
      <div className="flex justify-items-stretch">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AF8F6F]"
        />
        <button className="-m-12" onClick={handleAdd}>
          <FaPlus />
        </button>
      </div>

      <p className="text-center">
        Type your product name and press enter or + to add it to the list. To
        remove item from the list, click on it.
      </p>

      <ul className="text-center">
        {list.map(
          (item, index) =>
            item !== "" && (
              <li
                className="border border-gray-500 max-w-lg content-center p-2 m-2 inline-block rounded-md"
                key={index}
                onClick={() => handleDelete(index)}
              >
                {item}
              </li>
            )
        )}
      </ul>
      <div className="flex justify-end items-center">
        {list.length > 0 && <Button handleOnClick={handleCheck} text="Check" />}
      </div>
    </div>
  );
}

export default Calculator;
