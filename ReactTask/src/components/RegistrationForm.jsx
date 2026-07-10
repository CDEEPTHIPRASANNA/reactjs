import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import InputField from "./InputField";

function RegistrationForm() {
  const { formData, theme, addUser, resetForm } = useContext(FormContext);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    if (!formData.imagePreview) {
      alert("❌ Please upload an image!");
      return;
    }

    if (!formData.gender) {
      alert("❌ Please select a gender!");
      return;
    }

    // Add user with image and gender
    addUser({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobile: formData.mobile,
      dob: formData.dob,
      city: formData.city,
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    console.log("Employee Details:");
    console.table({
      ...formData,
      image: "Image uploaded",
    });

    resetForm();
  };

  return (
    <form className={`registration-form ${theme}`} onSubmit={handleSubmit}>
      <InputField
        label="First Name"
        name="firstName"
        placeholder="Enter First Name"
      />

      <InputField
        label="Last Name"
        name="lastName"
        placeholder="Enter Last Name"
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter Email"
      />

      <InputField
        label="Mobile Number"
        name="mobile"
        type="tel"
        placeholder="Enter Mobile Number"
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter Password"
      />

      <InputField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />

      <InputField
        label="Date of Birth"
        name="dob"
        type="date"
      />

      <InputField
        label="Gender"
        name="gender"
        type="select"
        options={["Male", "Female", "Other"]}
      />

      <InputField
        label="Upload Profile Picture"
        name="image"
        type="file"
      />

      <InputField
        label="City"
        name="city"
        placeholder="Enter City"
      />

      <InputField
        label="Address"
        name="address"
        type="textarea"
        placeholder="Enter Address"
      />

      <button className="submit-btn" type="submit">
        Register Employee
      </button>

      {showSuccess && (
        <div className="success-message">
          ✅ Employee Registered Successfully!
        </div>
      )}
    </form>
  );
}

export default RegistrationForm;
