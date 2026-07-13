import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Component3() {
  const { formData, handleChange, theme } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted Successfully âœ…");

    console.log(formData);
  };

  return (
    <form
      className={`form ${theme}`}
      onSubmit={handleSubmit}
    >
      {/* First Name */}

      <div className="input-group">
        <label>First Name</label>

        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Last Name */}

      <div className="input-group">
        <label>Last Name</label>

        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email */}

      <div className="input-group">
        <label>Email</label>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Mobile */}

      <div className="input-group">
        <label>Mobile Number</label>

        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>

      {/* Password */}

      <div className="input-group">
        <label>Password</label>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      {/* Confirm Password */}

      <div className="input-group">
        <label>Confirm Password</label>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
            {/* Date of Birth */}

      <div className="input-group">
        <label>Date of Birth</label>

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>

      {/* Gender */}

      <div className="input-group">
        <label>Gender</label>

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Address */}

      <div className="input-group full-width">
        <label>Address</label>

        <textarea
          name="address"
          rows="4"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {/* City */}

      <div className="input-group">
        <label>City</label>

        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit Button */}

      <div className="button-group">
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Component3;