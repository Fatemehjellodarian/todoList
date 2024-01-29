const ButtonTodo = ({ handleOnsubmit,name }) => {
    return <button className="ButtonTodo" disabled={!name} onClick={handleOnsubmit}>save</button>;
  };
  export default ButtonTodo;
  