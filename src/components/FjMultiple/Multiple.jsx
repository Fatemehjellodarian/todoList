import style from "./Multiple.module.css";
const Multiple = ({ formData, handleSelect }) => {
  const optionsList = [
    { id: 3, value: "gender", text: "gender" },
    { id: "1", value: "female", text: "female" },
    { id: "2", value: "male", text: "male" },
  ];

  return (
    <div className={style.formcontrol}>
      <label className={style.label}>click here</label>
      <select
        className={style.multiple}
        id="select"
        value={formData.gender}
        onChange={handleSelect}
      >
        {optionsList.map(({ value, text, id }) => (
          <option key={id} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Multiple;
