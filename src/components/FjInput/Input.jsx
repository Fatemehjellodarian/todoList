import style from "./Input.module.css"
const Input = ({ placeholder, onChange, value }) => {
  return (
    <input
      className={style.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type=""
    />
  );
};
export default Input;