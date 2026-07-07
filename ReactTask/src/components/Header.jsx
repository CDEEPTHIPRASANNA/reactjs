import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const { theme } = useContext(FormContext);

  return (
    <header className={`header ${theme}`}>
      <div className="header-left">
        <div className="logo-circle">
          👨‍💼
        </div>

        <div>
          <h1>Employee Registration</h1>
          <p>Create your employee account</p>
        </div>
      </div>

      <ThemeToggle />
    </header>
  );
}

export default Header;