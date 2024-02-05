import React from "react";
import { useState } from "react";
import Input from "../FjInput/Input";
import Multiple from "../FjMultiple/Multiple";
import ButtonTodo from "../FjButton/ButtonTodo";
import Notes from "../Fjnotes/Notes";
// import InputLastName from "../FjInput/InputLastName";
import InputAge from "../DateInput/InputAge";
import { idGenerator } from "../../helpers/funcs";
//  import styles from "./ProfileCard.module.css";

export default function ProfileCard({ gender, setGender }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [list, setList] = useState([]);

  const handleOnchange = ({ target: { value } }) => setName(value);
  const handleOnchangeLastName = ({ target: { value } }) => setLastName(value);
  const handleOnchangeAge = ({ target: { value } }) => setAge(value);
  const handleOnselect = ({ target: { value } }) => setGender(value);

  const newData = { name, gender, lastName, age };
  const handleOnsubmit = () => {
    setName("");
    setLastName("");
    setAge("");
    setGender("");
    setList([
      ...list,
      {
        name: name,
        lastName: lastName,
        age: age,
        gender: gender,
        id: idGenerator,
      },
    ]);
  };

  const handleDelete = (id) =>
    setList((notes) => notes.filter((n) => n.id !== id));

  return (
    <div className="inner">
      <h1>wellcome</h1>
      <Input value={name} onChange={handleOnchange} placeholder="NAME" />
      <Input
        value={lastName}
        onChange={handleOnchangeLastName}
        placeholder="LAST NAME"
      />
      <InputAge name={age} handleOnchangeAge={handleOnchangeAge} />
      <Multiple gender={gender} handleOnselect={handleOnselect} />
      <ButtonTodo handleOnsubmit={handleOnsubmit} name={name} gender={gender} age={age} lastName={lastName} />
      <Notes handleDelete={handleDelete} list={list} />
    </div>
  );
}
