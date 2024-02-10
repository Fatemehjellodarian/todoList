import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Input from "../FjInput/Input";
import Multiple from "../FjMultiple/Multiple";
import ButtonTodo from "../FjButton/ButtonTodo";
import Notes from "../Fjnotes/Notes";
import InputAge from "../DateInput/InputAge";
import { idGenerator } from "../../helpers/funcs";
import styles from "./ProfileCard.module.css";

import { scrollWithParams } from "../../helpers/funcs";

const canSubmit_V2 = ({ name, gender, age, lastName }) => {
  return name && gender && age && lastName;
};
const element = document.getElementById("notes");

export default function ProfileCard({ gender, setGender }) {
  const [name, setName] = useState("");
  const container = useRef(null);
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [list, setList] = useState([]);
  console.log(list);

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
  // scrollWithRef({container, block:"end" ,behavior:"smooth"});
  // },[list])

  // useEffect(() => {
  // scrollWithId({behavior:"smooth"});
  // }, [list]);

  useEffect(() => {
    const temp = (listLength) => {
      if (listLength === 0) return 0;
      if (listLength === 1) return 450;
      if (listLength > 1) return 450 + (listLength - 1) * 300;
    };

    //     // scrollWithParams({
    //     //   container,
    //     //   top: container.current.scrollHeight,
    //     //   behavior: "smooth",
    //     // });
    //     const scrollStatus = ()=> {
    //       return( list.length* );
    // }
    //     //  list.length * 450;
    //     // console.log({ scrollStatus });
    //     // console.log(`${%c} ${list.length}`, 'background: #222; color: #bada55');
    //     console.log("SCROLLED");
    container.current.scrollTo(0, temp(list?.length));
  }, [list]);

  const handleDelete = (id) =>
    setList((notes) => notes.filter((n) => n.id !== id));

  return (
    <div className={styles.inner} ref={container}>
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

      <Notes handleDelete={handleDelete} list={list} />
    </div>
  );
}
