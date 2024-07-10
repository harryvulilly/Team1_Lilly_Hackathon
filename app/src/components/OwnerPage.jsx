import React, { useState } from "react";
import Checklist from "./Checklist.jsx";

function OwnerPage() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [checklistData, setChecklistData] = useState({});

  const employee = "Ellie";
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

  const optionDefinitions = {
    "Confluence": "A collaboration tool used for project management. \nCheck out this to get started.",
    "Jira": "A tool used for issue and project tracking.",
    "Github": "A platform for version control and collaboration. \nFirst line. \nSecond line.",
    "VSCode": "A source-code editor made by Microsoft." ,
    "Biologica": "Biological data management tool and analysis platform.",
    "Option 4": "Additional option 4 definition.",
    "Option 5": "Additional option 5 definition.",
    "Option 6": "Additional option 6 definition.",
    "Option 7": "Additional option 7 definition.",
    "Option 8": "Additional option 8 definition.",
    "Option 9": "Additional option 9 definition.",
    "Option 10": "Additional option 10 definition.",
  };



  const addItem = (item) => {
    setItems([...items, item]);
    setChecklistData(prevChecklistData => ({
      ...prevChecklistData,
      [item]: optionDefinitions[item]
    }));
  };

  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
    setChecklistData(prevChecklistData => {
      const updatedChecklistData = { ...prevChecklistData };
      delete updatedChecklistData[item];
      return updatedChecklistData;
    });
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAdditionalOptions = searchTerm
    ? additionalOptions.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="owner-page p-8">
      <h2 className="text-2xl font-bold mb-4">Owner Page: Select Access</h2>
      <h4>Instructions: Select technologies and preview what {employee} will see! </h4>
      <div className="flex flex-row">
        <div className="flex-1 mr-8">
          <h3 className="text-xl font-bold mb-4">Selected: </h3>
          <ul className="list-disc pl-8 mb-4">
            {items.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                  onClick={() => removeItem(item)}
                >
                  -
                </button>
              </li>
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
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <Checklist data={checklistData} name ={employee}/>
        </div>
      </div>
      <div className="pt-5 flex justify-center">
        Finished editing?
        <button
          className="border-[1px] p-2.5 rounded-2xl text-xl"
         /* onClick={(e) => handleStartButton(e)} */
        >
          Send!
        </button>
      </div>    </div>
  );
}

export default OwnerPage;
 