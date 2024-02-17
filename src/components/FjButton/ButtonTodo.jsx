import style from "./ButtonTodo.module.css";

const ButtonTodo = ({ handleSubmit}) => (
  <button className={style.buttonTodo} onClick={handleSubmit} >
    save
  </button>
);

export default ButtonTodo;
