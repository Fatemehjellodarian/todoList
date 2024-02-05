

function InputAge({handleOnchangeAge,age}) {
  return (<input className="input"  placeholder="Age" type="date" value={age} onChange={handleOnchangeAge} />
  )
}

export default InputAge;