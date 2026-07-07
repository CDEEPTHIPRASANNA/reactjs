import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import InputField from "./InputField";

function RegistrationForm() {
  const { formData, theme } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    alert("✅ Employee Registered Successfully!");

    console.log("Employee Details");
    console.table(formData);
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
        label="City"
        name="city"
        placeholder="Enter City"
      />

      <InputField
        label="State"
        name="state"
        placeholder="Enter State"
      />

      <InputField
        label="Country"
        name="country"
        placeholder="Enter Country"
      />

      <InputField
        label="Address"
        name="address"
        type="textarea"
        placeholder="Enter Address"
      />

      <button className="submit-btn">
        Register Employee
      </button>

    </form>
  );
}

export default RegistrationForm;