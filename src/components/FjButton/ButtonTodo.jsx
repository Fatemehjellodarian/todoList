 export const ButtonTodo = ({ handleOnsubmit, name }) => (
  <button className="ButtonTodo" disabled={!name} onClick={handleOnsubmit}>
    save
  </button>
);


