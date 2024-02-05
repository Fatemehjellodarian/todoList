import React from "react";
import { useState } from "react";
import InputName from "../FjInput/InputName";
import Multiple from "../FjMultiple/Multiple";
import ButtonTodo from "../FjButton/ButtonTodo";
import Notes from "../Fjnotes/Notes";
import InputLastName from "../FjInput/InputLastName";
import InputAge from "../FjInput/InputAge";

const Id = () => Math.floor(Math.random() * 1000);
export default function TodoList({ gender, setGender }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [list, setList] = useState([]);

  const handleOnchange = ({ target: { value } }) => setName(value);
  const handleOnchangeLastName = ({ target: { value } }) => setLastName(value);
  const handleOnchangeAge =({target:{value}}) => setAge(value);
  const handleOnselect = ({ target: { value } }) => setGender(value);

  const newData = { name, gender, lastName,age };
  const handleOnsubmit = () => {
    setName("");
    setLastName("");
    setAge("");
    setGender("");
    setList([
      ...list,
      { name: name, lastName: lastName, age:age , gender: gender, id: Id() },
    ]);
  };

  const handleDelete = (id) => {
    console.log({ id });
    setList((notes) => notes.filter((n) => n.id !== id));
  };

  return (
    <>
      <div className="inner">
        <h1>wellcome</h1>
        <InputName name={name} handleOnchange={handleOnchange} />
        <InputLastName name={lastName} handleOnchangeLastName={handleOnchangeLastName}/>
        <InputAge name={age} handleOnchangeAge={handleOnchangeAge} />
        <Multiple gender={gender} handleOnselect={handleOnselect} />
        <ButtonTodo handleOnsubmit={handleOnsubmit} name={name} />
        <Notes handleDelete={handleDelete} list={list} />
      </div>
    </>
  );
}
