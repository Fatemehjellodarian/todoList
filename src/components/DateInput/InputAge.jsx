import style from "./DateInput.module.css"

function InputAge({handleOnchangeAge,age}) {
  return (<input className={style.input}  placeholder="Age" type="date" value={age} onChange={handleOnchangeAge} />
  )
}

export default InputAge;