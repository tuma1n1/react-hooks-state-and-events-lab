import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      {isDarkMode ? (
        <div className="App dark">
          {/* for dark mode */}
          <ShoppingList items={itemData} />
        </div>
      ) : (
        <div className="App light">
          {/* for light mode */}
          <ShoppingList items={itemData} />
        </div>
      )}
      
    </div>
  );
}

export default App;
