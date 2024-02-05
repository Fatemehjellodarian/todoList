
function InputLastName({handleOnchangeLastName,lastName }) {
  return (<input className="input"  placeholder="LastName" type="text" value={lastName} onChange={handleOnchangeLastName} />)
}

export default InputLastName;