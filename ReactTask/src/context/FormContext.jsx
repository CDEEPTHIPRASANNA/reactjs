/* eslint-disable react-refresh/only-export-components */
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
    image: null,
    imagePreview: null,
  });

  // Store all users with their images
  const [users, setUsers] = useState([]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({
            ...prev,
            image: file,
            imagePreview: reader.result,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Add user with image
  const addUser = (userData) => {
    const newUser = {
      id: Date.now(),
      ...userData,
      imagePreview: formData.imagePreview,
      gender: formData.gender,
    };
    setUsers((prev) => [...prev, newUser]);
  };

  // Get users by gender
  const getUsersByGender = (gender) => {
    if (!gender) return users;
    return users.filter((user) => user.gender === gender);
  };

  // Theme Toggle
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  // Reset form
  const resetForm = () => {
    setFormData({
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
      image: null,
      imagePreview: null,
    });
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        handleChange,
        theme,
        toggleTheme,
        users,
        addUser,
        getUsersByGender,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
