import style from "./DateInput.module.css";

const DateInput = ({ onChange, value, Placeholder }) => {
  return (
    <input
      className={style.input}
      onChange={onChange}
      value={value}
      placeholder={Placeholder}
      type="date"
    />
  );
};
export default DateInput;
