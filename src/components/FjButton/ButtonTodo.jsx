import style from "./ButtonTodo.module.css";

const ButtonTodo = ({ handleOnsubmit }) => (
  <button className={style.buttonTodo} onClick={handleOnsubmit}>
    save
  </button>
);

export default ButtonTodo;
