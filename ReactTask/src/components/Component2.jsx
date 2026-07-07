import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import Component3 from "./Component3";

function Component2() {
  const { theme } = useContext(FormContext);

  return (
    <div className={`component2 ${theme}`}>
      <div className="section-title">
        <h2>Personal Information</h2>
        <p>Please fill in all the required details below.</p>
      </div>

      {/* Third Nested Component */}
      <Component3 />
    </div>
  );
}

export default Component2;