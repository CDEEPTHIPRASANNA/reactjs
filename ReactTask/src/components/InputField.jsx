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
      ) : type === "file" ? (
        <div className="file-upload-wrapper">
          <input
            type="file"
            name={name}
            accept="image/*"
            onChange={handleChange}
            required
            id={`file-input-${name}`}
            style={{ display: "none" }}
          />
          <label htmlFor={`file-input-${name}`} className="file-input-label">
            {formData.imagePreview ? (
              <div className="image-preview">
                <img src={formData.imagePreview} alt="Preview" />
                <span className="preview-text">✓ Image selected</span>
              </div>
            ) : (
              <div className="file-input-placeholder">
                <span className="upload-icon">📸</span>
                <span className="upload-text">Click to upload image</span>
              </div>
            )}
          </label>
        </div>
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
