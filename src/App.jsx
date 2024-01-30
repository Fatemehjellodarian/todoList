import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

 function App() {

  return(
  <div className="root">
  
    <img className="image-1" src="https://colorlib.com/etc/regform/colorlib-regform-26/images/image-1.png" alt=""/>
    {/* <img className="image-1" src="./src/assets/360_F_113995750_dAEGvjqxnsYD6asKjeDWJoVoSqjFvdGO-removebg-preview.png" alt=""></img> */}
   
     <TodoList />
     </div>)
}

export default App;


