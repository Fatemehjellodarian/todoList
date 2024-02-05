const Multiple = ({ gender, handleOnselect }) => {


  const optionsList = [
    { id:"3",value:"gender",text:"gender"},
      {id: "1", value: "female", text: "female" },
    { id: "2", value: "male", text: "male" },
  ];

  return (
    <div>
      <label className="lable">click here</label>
      <select
        className="formcontrol"
        id="select"
        value={gender}
        onChange={handleOnselect}
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
