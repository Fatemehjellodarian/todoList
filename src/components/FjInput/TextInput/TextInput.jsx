import style from "./TextInput.module.css";

const TextInput = ({ placeholder, onChange, value }) => {
  return (
    <input
      className={style.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type="text"
    />
  );
};

export default TextInput;
