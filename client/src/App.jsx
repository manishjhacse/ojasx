import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [mode]);
  const handleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <div className="bg-white transition-all duration-500 h-screen w-screen flex justify-center items-center dark:bg-black dark:text-white">
      <button
        className="bg-black px-3 py-1 rounded-md dark:bg-white transition-all duration-500 dark:text-black text-white"
        onClick={() => handleMode()}
      >
        Toggle mode
      </button>
    </div>
  );
}

export default App;
