import { useEffect, useState } from "react";

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
        completed: false
      }
    ],
  },
  {
    id: 2,
    "generated-suggestions": [],
  },
];

function NewHirePage() {
  const [templates, setTemplates] = useState([]);

  // Fetch data from BE
  useEffect(() => {
    setTemplates(exampleTemplates[0]["generated-suggestions"]);
  }, []);

  return (
    <main className="px-2.5 md:flex md:flex-row md:justify-around md:mt-5">
      <div>
        <h1 className="text-3xl">Useful Links</h1>
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

      <div className="flex flex-col">
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
              }

              function handleSetComplete(completed) {
                console.log({ ...action, completed });
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

      <form>
        <label className="text-3xl mb-2.5">
          Suggest Changes
        </label>


      </form>
    </main>
  );
}

export default NewHirePage;
