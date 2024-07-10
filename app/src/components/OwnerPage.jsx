import React, { useState } from "react";
import Checklist from "./Checklist.jsx";

function OwnerPage() {
  const [items, setItems] = useState([]);
  const [buttonVisibility, setButtonVisibility] = useState("visible");
  const [searchTerm, setSearchTerm] = useState("");
  const [sendText, setSendText] = useState("Finished editing?");
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

  const [optionLinks, setOptionLinks] = useState({
    Confluence: "https://lilly-confluence.atlassian.net/wiki",
    Jira: "link",
    Github: "link",
    VSCode: "link",
    Biologica: "link",
    "Option 4": "link",
    "Option 5": "link",
    "Option 6": "link",
    "Option 7": "link",
    "Option 8": "link",
    "Option 9": "link",
    "Option 10": "link",
  });

  const [optionDefinitions, setOptionDefinitions] = useState({
    Confluence: "A collaboration tool used for project management.",
    Jira: "A tool used for issue and project tracking.",
    Github: "A platform for version control and collaboration.",
    VSCode: "A source-code editor made by Microsoft.",
    Biologica:
      "Biological instructions and data management tool.\nStart here and install!",
    "Option 4": "Additional option 4 definition.",
    "Option 5": "Additional option 5 definition.",
    "Option 6": "Additional option 6 definition.",
    "Option 7": "Additional option 7 definition.",
    "Option 8": "Additional option 8 definition.",
    "Option 9": "Additional option 9 definition.",
    "Option 10": "Additional option 10 definition.",
  });

  function handleSendButton(e) {
    setButtonVisibility("hidden");
    setSendText("Email successfully sent!");
  }

  const addItem = (item) => {
    setItems([...items, item]);
    setChecklistData((prevChecklistData) => ({
      ...prevChecklistData,
      [item]: [optionDefinitions[item], optionLinks[item]],
    }));
  };

  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
    setChecklistData((prevChecklistData) => {
      const updatedChecklistData = { ...prevChecklistData };
      delete updatedChecklistData[item];
      return updatedChecklistData;
    });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [newOption, setNewOption] = useState("");
  const [newDefinition, setNewDefinition] = useState("");
  const [newLink, setNewLink] = useState("");

  const handleNewOptionChange = (event) => {
    setNewOption(event.target.value);
  };

  const handleNewDefinitionChange = (event) => {
    setNewDefinition(event.target.value);
  };

  const handleNewLinkChange = (event) => {
    setNewLink(event.target.value);
  };

  const addNewOption = () => {
    setOptionDefinitions((prevDefinitions) => ({
      ...prevDefinitions,
      [searchTerm]: newDefinition,
    }));
    setOptionLinks((prevLinks) => ({
      ...prevLinks,
      [searchTerm]: newLink,
    }));
    addItem(searchTerm);
    setNewOption("");
    setNewDefinition("");
    setNewLink("");
  };

  const filteredAdditionalOptions = searchTerm
    ? additionalOptions.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  const handleDefinitionChange = (item, newDefinition) => {
    setOptionDefinitions((prevDefinitions) => ({
      ...prevDefinitions,
      [item]: newDefinition,
    }));
    setChecklistData((prevChecklistData) => ({
      ...prevChecklistData,
      [item]: [newDefinition, optionLinks[item]],
    }));
  };

  const handleLinkChange = (item, newLink) => {
    setOptionLinks((prevLinks) => ({
      ...prevLinks,
      [item]: newLink,
    }));
    setChecklistData((prevChecklistData) => ({
      ...prevChecklistData,
      [item]: [optionDefinitions[item], newLink],
    }));
  };

  return (
    <div className="owner-page p-8">
      <h2 className="text-2xl font-bold mb-4">Owner Page: Select Access</h2>
      <h3> Employee: {employee} </h3>
      <h3> Employee email: ellie.isnew@lilly.com </h3>
      <h4>
        Instructions: Select technologies and preview what {employee} will see!{" "}
      </h4>
      <div className="flex flex-row">
        <div className="flex-1 mr-8">
          <h3 className="text-xl font-bold mb-4">Selected: </h3>
          <ul className="list-disc pl-8 mb-4">
            {items.map((item, index) => (
              <li key={index} className="mb-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                  onClick={() => removeItem(item)}
                >
                  - {item}
                </button>

                <div>
                  <label htmlFor={`link-${item}`}> Link: </label>
                </div>
                <div>
                  <textarea
                    type="text"
                    id={`link-${item}`}
                    value={optionLinks[item]}
                    onChange={(e) => handleLinkChange(item, e.target.value)}
                    className="border px-2 py-1 w-full text-black"
                    rows="1"
                  />
                </div>
                <div>
                  <label htmlFor={`definition-${item}`}> Instructions: </label>
                </div>
                <div>
                  <textarea
                    type="text"
                    id={`definition-${item}`}
                    value={optionDefinitions[item]}
                    onChange={(e) =>
                      handleDefinitionChange(item, e.target.value)
                    }
                    className="border px-2 py-1 w-full text-black"
                    rows="3"
                  />
                </div>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mb-4">Commonly Used</h3>
          <ul className="flex flex-wrap list-none pl-0 mb-4">
            {initialOptions.map((option, index) => (
              <li key={index} className="mb-2 mr-4 flex items-center">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                  onClick={() => addItem(option)}
                >
                  + {option}
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
            className="border px-4 py-2 mb-4 text-black"
          />
          <ul className="list-disc pl-8">
            {filteredAdditionalOptions.map((option, index) => (
              <li key={index} className="mb-2 flex items-center">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                  onClick={() => addItem(option)}
                >
                  + {option}
                </button>
              </li>
            ))}
            {filteredAdditionalOptions.length === 0 && searchTerm && (
              <div>
                <p className="mb-2">No matches found. Add a new option:</p>
                <div>
                  <label htmlFor="newDefinition" className="block">
                    Definition:
                  </label>
                  <textarea
                    id="newDefinition"
                    value={newDefinition}
                    onChange={handleNewDefinitionChange}
                    className="border px-2 py-1 w-full mb-2 text-black"
                    rows="4"
                  />
                </div>
                <div>
                  <label htmlFor="newLink" className="block">
                    Link:
                  </label>
                  <textarea
                    id="newLink"
                    value={newLink}
                    onChange={handleNewLinkChange}
                    className="border px-2 py-1 w-full mb-2 text-black"
                    rows="2"
                  />
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={addNewOption}
                >
                  Add New Option
                </button>
              </div>
            )}
          </ul>
        </div>
        <div className="flex-1">
          <Checklist data={checklistData} name={employee} />
        </div>
      </div>
      <div className="pt-5 flex justify-center">
        {sendText}
        <div>
          {buttonVisibility === "visible" && (
            <button
              className="border-[1px] p-2.5 rounded-2xl text-xl"
              onClick={(e) => handleSendButton(e)}
            >
              Send to ellie.isnew@lilly.com!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OwnerPage;
