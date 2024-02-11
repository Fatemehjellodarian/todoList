 import React, { useEffect, useRef } from "react";
 import { useState } from "react";
 import Input from "../FjInput/Input";
 import Multiple from "../FjMultiple/Multiple";
 import ButtonTodo from "../FjButton/ButtonTodo";
 import Notes from "../Fjnotes/Notes";
 import InputAge from "../DateInput/InputAge";
 import { idGenerator } from "../../helpers/funcs";
 import styles from "./ProfileCard.module.css";

 const canSubmit_V2 = ({ name, gender, age, lastName }) => {
 return name && gender && age && lastName;
 };
 const element = document.getElementById("notes");

 export default function ProfileCard({ gender, setGender }) {
 const [name, setName] = useState("");
 const container = useRef(null)
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
 id: idGenerator(),
 },
 ]);
 console.log(list);
 };

  // useEffect(()=>{
  //   document.getElementById("notes"); window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});
  //  container.current.scrollIntoView({ behavior: "smooth", block: "end" });
  // },[list]);

  // const scrollHandler =()=>{
  //   container.current.scrollTo({top:container.current.scrollHeight,behavior:"smooth"});
  // }

 useEffect(()=>{
   container.current.scrollTo({top:container.current.scrollHeight,behavior:"smooth"})
 
 },[list]);


 const handleDelete = (id) =>
 setList((notes) => notes.filter((n) => n.id !== id));

 return (
  
 <div className={styles.inner} ref={container} >
 <h1 className={styles.h1}>welcome</h1>
 <Input value={name} onChange={handleOnchange} placeholder="NAME" />
 <Input
 value={lastName}
 onChange={handleOnchangeLastName}
 placeholder="LAST NAME"
 />
 <InputAge name={age} handleOnchangeAge={handleOnchangeAge} />
 <Multiple gender={gender} handleOnselect={handleOnselect} />
 {canSubmit_V2({ name, gender, age, lastName }) ? (
 <ButtonTodo
 handleOnsubmit={handleOnsubmit}
 name={name}
 gender={gender}
 age={age}
 lastName={lastName} 

 />
 ) : (
 <button className={styles.disable}></button>
 )}
 {/* <button onClick={scrollHandler}>scroll</button> */}

 <Notes handleDelete={handleDelete} list={list}   />
 </div>
 );
 }

