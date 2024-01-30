import React from 'react'
import { useState } from "react";
import InputTodo from "../FjInput/InputTodo";
import Multiple from "../FjMultiple/Multiple";
import ButtonTodo from "../FjButton/ButtonTodo";
import Notes from "./Fjnotes/Notes";




const Id = () => Math.floor(Math.random() * 1000);
function TodoList() {
  const [name, setName] = useState("");
  const[gender,setGender] = useState("");
  const [list, setList] = useState([]);
 
  const handleOnchange = ({ target: { value } }) =>setName(value);
  const handleOnselect= ({target:{value}})=>setGender(value);
  
  const newData = { name, id:Id(),gender };
  const handleOnsubmit = () => {
  setGender("");
    setName("");
    setList([...list, newData]);
  };
  const handleDelete = (id) =>setList((notes) => notes.filter((n) => n.id !== id));

  return (
    <div className="inner">
      <h1>wellcome</h1>
      <InputTodo name={name} handleOnchange={handleOnchange} />
      <Multiple  gender={gender}  handleOnselect={handleOnselect} handleOnsubmit={handleOnsubmit} />
      <ButtonTodo handleOnsubmit={handleOnsubmit}  name={name}  />
      <Notes handleDelete={handleDelete} list={list} />
    </div>
  )
}

export default TodoList;







