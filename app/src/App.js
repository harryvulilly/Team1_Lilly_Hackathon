import { useState } from "react";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import NewHirePage from "./components/NewHire/NewHirePage";
import OwnerPage from "./components/OwnerPage";

function App() {
  const [role, setRole] = useState("");

  useState(() => {
    setRole("new-hire");
  }, []);
  return (
    <div className="min-h-screen w-full fixed">
      <Navigation />
      <Welcome />

      {role === "new-hire" ? (
        <NewHirePage />
      ) : role === "owner" ? (
        <OwnerPage />
      ) : (
        <>
          <h1>Invalid Role</h1>
        </>
      )}
    </div>
  );
}

export default App;
