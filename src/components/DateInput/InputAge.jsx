import style from "./DateInput.module.css";

function InputAge({ age , handleChange }) {
  return (
    <input
      className={style.input}
      placeholder="Age"
      type="date"
      value={age}
      onChange={handleChange}
    />
  );
}

export default InputAge;
