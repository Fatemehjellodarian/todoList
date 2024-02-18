import style from "./Input.module.css";

const Input = ({ placeholder, onChange, value, type }) => {
  const optionsList = [
    { id: 3, value: "gender", text: "gender" },
    { id: "1", value: "female", text: "female" },
    { id: "2", value: "male", text: "male" },
  ];

  if (type === "select") {
    return (
      <div className={style.formcontrol}>
        <label className={style.label}>click here</label>
        <select
          className={style.multiple}
          id="select"
          value={value}
          onChange={onChange}
        >
          {optionsList.map(({ value, text, id }) => (
            <option key={id} value={value}>
              {text}
            </option>
          ))}
        </select>
      </div>
    );
  } if (type === "text") {
    return (
      <input
        className={style.input}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type="text"
      />
    );}
    if (type === "date") {
      return(
      <input
      className={style.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type="date"
    />);

      
    }
  };

export default Input;
