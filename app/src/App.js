import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import OwnerPage from "./components/OwnerPage"

function App() {
  return (
    <div className="min-h-screen">
      <Navigation /> 
     <Welcome /> 

      {/* To Be Done */}
      <OwnerPage />
     {/* <NewHirePage /> */}
    </div>
  );
}

export default App;
