import { useContext } from "react";
import { FormContext } from "../context/FormContext";

import Header from "./Header";
import RegistrationForm from "./RegistrationForm";

function FormLayout() {
  const { theme } = useContext(FormContext);

  return (
    <div className={`page ${theme}`}>
      <div className={`glass-card ${theme}`}>
        <Header />
        <RegistrationForm />
      </div>
    </div>
  );
}

export default FormLayout;