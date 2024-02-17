import style from "./DateInput.module.css";

function InputAge({ formData, handleChange }) {
  return (
    <input
      className={style.input}
      placeholder="Age"
      type="date"
      value={formData.age}
      onChange={handleChange}
    />
  );
}

export default InputAge;
