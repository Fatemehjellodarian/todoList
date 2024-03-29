// import React, { useEffect, useRef } from "react";
// import { useState } from "react";
// import Input from "../FjInput/Input";
// import Multiple from "../FjMultiple/Multiple";
// import ButtonTodo from "../FjButton/ButtonTodo";
// import Notes from "../Fjnotes/Notes";
// import InputAge from "../DateInput/InputAge";
// import { idGenerator, scrollToLastItem } from "../../helpers/funcs";
// import styles from "./ProfileCard.module.css";

// const canSubmit_V2 = ({ name, gender, age, lastName }) => {
//   return name && gender && age && lastName;
// };

// export default function ProfileCard({ gender, setGender }) {
//   const [name, setName] = useState("");
//   const containerRef = useRef(null);
//   const [lastName, setLastName] = useState("");
//   const [age, setAge] = useState("");
//   const [list, setList] = useState([]);
//   console.log(list);
//   const handleOnchange = ({ target: { value } }) => setName(value);
//   const handleOnchangeLastName = ({ target: { value } }) => setLastName(value);
//   const handleOnchangeAge = ({ target: { value } }) => setAge(value);
//   const handleOnselect = ({ target: { value } }) => setGender(value);

//   const newData = { name, gender, lastName, age };
//   const handleOnsubmit = () => {
//     setName("");
//     setLastName("");
//     setAge("");
//     setGender("");

//     setList([
//       ...list,
//       {
//         name: name,
//         lastName: lastName,
//         age: age,
//         gender: gender,
//         id: idGenerator(),
//       },
//     ]);
//   };

//   useEffect(() => {
//     if (list.length) {
//       scrollToLastItem({
//         container: containerRef,
//         scrollType: "scrollWithId",
//         behavior: "smooth",
//         listLength: list.length,
//       });
//     }
//   }, [list]);

//   const handleDelete = (id) =>
//     setList((notes) => notes.filter((n) => n.id !== id));

//   return (
//     <div className={styles.inner} ref={containerRef}>
//       <h1 className={styles.h1}>welcome</h1>
//       <Input value={name} onChange={handleOnchange} placeholder="NAME" />
//       <Input
//         value={lastName}
//         onChange={handleOnchangeLastName}
//         placeholder="LAST NAME"
//       />
//       <InputAge name={age} handleOnchangeAge={handleOnchangeAge} />
//       <Multiple gender={gender} handleOnselect={handleOnselect} />
//       {canSubmit_V2({ name, gender, age, lastName }) ? (
//         <ButtonTodo
//           handleOnsubmit={handleOnsubmit}
//           name={name}
//           gender={gender}
//           age={age}
//           lastName={lastName}
//         />
//       ) : (
//         <button className={styles.disable}></button>
//       )}

//       <Notes handleDelete={handleDelete} list={list} />
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { idGenerator, scrollToLastItem } from "../../helpers/funcs";
import Input from "../FjInput/Input";
import ButtonTodo from "../FjButton/ButtonTodo";
import Notes from "../FjNotes/Notes";
import styles from "./ProfileCard.module.css";

const canSubmit = ({ name, gender, age, lastName }) => {
  return name && gender && age && lastName;
};

const ProfileCard = ({ formData, setFormData }) => {
  const [list, setList] = useState([]);
  const containerRef = useRef(null);

  const handleInputChange = ({ target: { value } }, field) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleDelete = (id) =>
    setList((notes) => notes.filter((n) => n.id !== id));

  const handleOnsubmit = () => {
    setList((prevList) => [
      ...prevList,
      {
        ...formData,
        id: idGenerator(),
      },
    ]);
    setFormData({
      name: "",
      lastName: "",
      age: "",
      gender: "",
    });
  };

  useEffect(() => {
    if (list.length) {
      scrollToLastItem({
        container: containerRef,
        scrollType: "scrollWithId",
        behavior: "smooth",
        listLength: list.length,
      });
    }
  }, [list]);

  return (
    <>
      <div className={styles.inner} ref={containerRef}>
        <h1 className={styles.h1}>Welcome</h1>
        <Input
          value={formData.name}
          onChange={(e) => handleInputChange(e, "name")}
          placeholder="Name"
          type="text"
        />
        <Input
          value={formData.lastName}
          onChange={(e) => handleInputChange(e, "lastName")}
          placeholder="Last Name"
          type="text"
        />
        <Input
          value={formData.age}
          onChange={(e) => handleInputChange(e, "age")}
          type="date"
        />
        <Input
          value={formData.gender}
          onChange={(e) => handleInputChange(e, "gender")}
          type="select"
        />

        {canSubmit(formData) ? (
          <ButtonTodo handleOnsubmit={handleOnsubmit} />
        ) : (
          <button className={styles.disable}></button>
        )}
        <Notes handleDelete={handleDelete} list={list} />
      </div>
    </>
  );
};

export default ProfileCard;
