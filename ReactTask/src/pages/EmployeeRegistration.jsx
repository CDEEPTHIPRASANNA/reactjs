import { useState } from "react";
import FormProvider from "../context/FormContext";
import RegistrationForm from "../components/RegistrationForm";
import GenderFilteredUsers from "../components/GenderFilteredUsers";

function EmployeeRegistration() {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <FormProvider>
      <div className="employee-registration-page">
        <div className="registration-header">
          <h1>Employee Management System</h1>
          <p>Register employees and view them by gender</p>
        </div>

        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            📋 Register Employee
          </button>
          <button
            className={`tab-button ${activeTab === "view" ? "active" : ""}`}
            onClick={() => setActiveTab("view")}
          >
            👥 View by Gender
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "register" && (
            <div className="register-section">
              <RegistrationForm />
            </div>
          )}

          {activeTab === "view" && (
            <div className="view-section">
              <GenderFilteredUsers />
            </div>
          )}
        </div>
      </div>
    </FormProvider>
  );
}

export default EmployeeRegistration;
