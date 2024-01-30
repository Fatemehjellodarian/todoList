 const InputTodo = ({ name, handleOnchange }) => {
    return(<input className="input"  placeholder="Name" type="text" value={name} onChange={handleOnchange} />
    
  )};
  export default InputTodo;

  