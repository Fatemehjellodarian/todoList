import style from "./DateInput.module.css";

function InputAge({ age , handleInputChange }) {
  return (
    <input
      className={style.input}
      placeholder="Age"
      type="date"
      value={age}
      onChange={handleInputChange}
    />
  );
}

export default InputAge;
