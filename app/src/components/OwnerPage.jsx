import React, { useState } from "react";

function OwnerPage() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const initialOptions = [
    "Confluence",
    "Jira",
    "Github",
    "VSCode",
    "Biologica",
  ];

  const additionalOptions = [
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
  ];

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const buttons = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"];

  const filteredAdditionalOptions = searchTerm
    ? additionalOptions.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  return (
    <div className="owner-page p-8">
      <h2 className="text-2xl font-bold mb-4">Owner Page: Select Access</h2>

      <h3 className="text-xl font-bold mb-4">Selected: </h3>
      <ul className="list-disc pl-8 mb-4">
        {items.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mb-4">Commonly Used</h3>
      <ul className="list-disc pl-8 mb-4">
        {initialOptions.map((option, index) => (
          <li key={index} className="mb-2 flex items-center">
            {option}
            <button
              className="bg-green-500 text-white px-2 py-1 rounded ml-2"
              onClick={() => addItem(option)}
            >
              +
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded ml-2"
              onClick={() => removeItem(option)}
            >
              -
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mb-4">Search Additional Options</h3>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border px-4 py-2 mb-4 w-full text-black"
      />
      <ul className="list-disc pl-8">
        {filteredAdditionalOptions.map((option, index) => (
          <li key={index} className="mb-2 flex items-center">
            {option}
            <button
              className="bg-green-500 text-white px-2 py-1 rounded ml-2"
              onClick={() => addItem(option)}
            >
              +
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded ml-2"
              onClick={() => removeItem(option)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OwnerPage;
