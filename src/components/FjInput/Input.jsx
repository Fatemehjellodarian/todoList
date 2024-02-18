import style from "./Input.module.css";
const Input = ({ placeholder, onChange, value,type }) => {
  return (
    <input
      className={style.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
};
export default Input;
