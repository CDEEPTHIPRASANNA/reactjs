import { createContext, useState } from "react";

// Create Context
export const FormContext = createContext();

function FormProvider({ children }) {
  // Theme State
  const [theme, setTheme] = useState("light");

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Theme Toggle
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        handleChange,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;