import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  options = [],
}) {
  const { formData, handleChange, theme } = useContext(FormContext);

  return (
    <div className={`input-group ${theme}`}>
      <label>{label}</label>

      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          rows="4"
          required
        />
      ) : type === "select" ? (
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required
        >
          <option value="">Select {label}</option>

          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          required
        />
      )}
    </div>
  );
}

export default InputField;