import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import Component2 from "./Component2";

function Component1() {
  const { theme, toggleTheme } = useContext(FormContext);

  return (
    <div className={`container ${theme}`}>
      <div className="card">

        <div className="header">

          <div>
            <h1>Employee Registration</h1>
            <p>Task 9 - useContext Hook Implementation</p>
          </div>

          <button
            className="theme-btn"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
          </button>

        </div>

        <Component2 />

      </div>
    </div>
  );
}

export default Component1;