import { useState } from "react";

function Welcome() {
  const [visible, setVisible] = useState("");

  function handleStartButton(e) {
    setVisible("hidden");
  }

  return (
    <main className={`${visible} flex flex-col justify-center min-h-screen`}>
      <div className="py-4">
        <h1 className="text-5xl text-center">New Employee Resources</h1>
        <h2 className="pt-5 w-8/12 mx-auto text-3xl text-center">
          One stop shop for new employees
        </h2>
      </div>

      <div className="pt-5 flex justify-center">
        <button
          className="border-[1px] p-2.5 rounded-2xl text-xl"
          onClick={(e) => handleStartButton(e)}
        >
          Getting Started
        </button>
      </div>
    </main>
  );
}

export default Welcome;
