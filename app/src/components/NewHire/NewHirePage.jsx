import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const exampleTemplates = [
  {
    id: 1,
    "generated-suggestions": [
      {
        tool: "GitHub",
        completed: false,
      },
      {
        tool: "Jira",
        completed: false,
      },
      {
        tool: "LucidChart",
        completed: true,
      },
      {
        tool: "Confluence",
        completed: false,
      },
    ],
  },
  {
    id: 2,
    "generated-suggestions": [],
  },
];

function NewHirePage() {
  const [templates, setTemplates] = useState([]);
  const [copiedTemplates, setCopiedTemplates] = useState([]);
  // Fetch data from BE
  useEffect(() => {
    setTemplates(exampleTemplates[0]["generated-suggestions"]);
    setCopiedTemplates(exampleTemplates[0]["generated-suggestions"]);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  async function handleSave() {
    setTemplates(copiedTemplates);
  }

  async function handleCancel() {
    setCopiedTemplates(templates);
  }

  return (
    <main className="px-2.5 md:flex md:flex-row md:justify-around md:mt-5">
      <div className="w-1/3 px-10">
        <h1 className="text-3xl mb-2.5">Useful Links</h1>
        <ul>
          <li className="mb-1.5">
            <a
              href="https://now.lilly.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xl underline"
            >
              Workday
            </a>
          </li>
          <li className="mb-1.5">
            <a
              href="https://now.lilly.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xl underline"
            >
              LillyNow - Lilly Home Page
            </a>
          </li>
          <li className="mb-1.5">
            <a
              href="https://dev.lilly.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xl underline"
            >
              Dev Front Door - Request Access
            </a>
          </li>
          <li className="mb-1.5">
            <a
              href="https://github.com/EliLillyCo"
              target="_blank"
              rel="noreferrer"
              className="text-xl underline"
            >
              Lilly GitHub (Access Required)
            </a>
          </li>
          <li className="mb-1.5">
            <a
              href="https://elilillyco.stackenterprise.co/"
              target="_blank"
              rel="noreferrer"
              className="text-xl underline"
            >
              LillyFlow - General Questions
            </a>
          </li>
        </ul>
      </div>

      <br />

      <div className="flex flex-col w-1/3 px-10">
        <h1 className="text-3xl mb-2.5">Your Generated Template</h1>
        {templates.length === 0 ? (
          <div>
            <h1 className="text-2xl">You are all set</h1>
          </div>
        ) : (
          <ul className="w-1/2 md:w-full text-sm font-medium text-white bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {templates.map((action, index) => {
              function handleSetSuggestion(value) {
                setTemplates((templates) =>
                  templates.map((a) => (a === action ? value : a)),
                );
                setCopiedTemplates((templates) =>
                  copiedTemplates.map((a) => (a === action ? value : a)),
                );
              }

              function handleSetComplete(completed) {
                handleSetSuggestion({ ...action, completed });
              }
              return (
                <li
                  key={index}
                  className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 "
                >
                  <div className="flex items-center ps-3">
                    <input
                      checked={action.completed}
                      onChange={(e) => handleSetComplete(e.target.checked)}
                      type="checkbox"
                      id={`${action.tool}-checkbox`}
                      className="w-5 h-5 accent-blue-400 text-white cursor-pointer"
                    />
                    <label
                      htmlFor={`${action.tool}-checkbox`}
                      className="w-full py-3 ms-2 text-sm font-medium cursor-pointer"
                    >
                      {action.tool}
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <br />
      {copiedTemplates.length === 0 ? null : (
        <form className="w-1/3 px-10" onSubmit={(e) => handleSubmit(e)}>
          <label className="text-3xl">Suggest Change</label>

          <ul className="mt-2.5 w-1/2 md:w-full text-sm font-medium text-white bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {copiedTemplates.map((action, index) => {
              function handleSetAction(value) {
                setCopiedTemplates((templates) =>
                  templates.map((a) => (a === action ? value : a)),
                );
              }

              function handleActionChange(tool) {
                handleSetAction({ ...action, tool });
              }

              function handleDeleteAction(e) {
                console.log("delete");
              }

              return (
                <li
                  key={index}
                  className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 "
                >
                  <div className="flex items-center px-3">
                    <input
                      className="bg-transparent w-full active:outline-none py-3 ms-2 text-sm font-medium cursor-text"
                      value={action.tool}
                      onChange={(e) => handleActionChange(e.target.value)}
                    />

                    <button
                      className="text-red-500"
                      onClick={(e) => handleDeleteAction(e)}
                    >
                      <FaRegTrashCan />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-2.5 flex justify-end w-full">
            <button
              className="w-24 mr-2.5 bg-transparent hover:bg-[#242526] hover:border-white text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
              onClick={() => handleSave()}
            >
              Save
            </button>
            <button
              className="text-center w-24 ml-2.5 bg-transparent hover:bg-[#242526] hover:border-white text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
              onClick={() => handleCancel()}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </main>
  );
}

export default NewHirePage;
