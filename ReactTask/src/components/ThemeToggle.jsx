import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function ThemeToggle() {

  const { theme, toggleTheme } = useContext(FormContext);

  return (

    <button
      className="theme-btn"
      onClick={toggleTheme}
    >
      {theme === "light"
        ? "🌙 Dark"
        : "☀ Light"}
    </button>

  );
}

export default ThemeToggle;