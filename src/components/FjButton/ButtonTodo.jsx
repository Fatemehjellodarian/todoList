// function Aaaa({name,gender,lastName,age}) {
//   return(
//     {(!name && !gender && !age && !lastName )return{} }
  
//   )
// }
import style from "./ButtonTodo.module.css";

 const ButtonTodo = ({ handleOnsubmit,name }) => (
  <button className={style.buttonTodo} disabled={!name} onClick={handleOnsubmit}>
    save
  </button>
);  

export default ButtonTodo;

                                                                       