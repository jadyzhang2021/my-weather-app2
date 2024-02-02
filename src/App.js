import { useState } from "react";
import "./App.css";
import CurrentDashBoard from "./components/CurrentCity/CurrentDashBoard";
import ForcastDashBoard from "./components/Forcast/ForcastDashBoard";
import SearchDashBoard from "./components/search/SearchDashBoard";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <CurrentDashBoard inputValue={inputValue} />
      <div>
        <ForcastDashBoard inputValue={inputValue} />
        <SearchDashBoard setInputValue={setInputValue} />
      </div>
    </div>
  );
}

export default App;
