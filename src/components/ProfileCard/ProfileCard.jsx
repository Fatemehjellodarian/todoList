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

import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Input from "../FjInput/Input";
import Multiple from "../FjMultiple/Multiple";
import ButtonTodo from "../FjButton/ButtonTodo";
import Notes from "../Fjnotes/Notes";
import InputAge from "../DateInput/InputAge";
import { idGenerator, scrollToLastItem } from "../../helpers/funcs";
import styles from "./ProfileCard.module.css";

const canSubmit_V2 = ({ formData }) => {
  return formData && gender;
};

export default function ProfileCard({ gender, setGender }) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    age: "",
  });

  const containerRef = useRef(null);
  const [list, setList] = useState([]);
  console.log(list);

  const handleChange = ({ target: { value } }) => {
    setFormData(value);
  };

  const handleSelect = ({ target: { value } }) => {
    setGender(value);
  };

  const handleDelete = (id) =>
    setList((notes) => notes.filter((n) => n.id !== id));

  const handleSubmit = () => {
    setGender("");

    setList([
      ...list,
      {
        name: formData.name,
        lastName: formData.lastName,
        age: formData.age,
        gender: gender,
        id: idGenerator(),
      },
    ]);
    setFormData({
      name: "",
      lastName: "",
      age: "",
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
    <div className={styles.inner} ref={containerRef}>
      <h1 className={styles.h1}>welcome</h1>
      <Input
        value={formData.name}
        onChange={handleChange}
        name="name"
        placeholder="NAME"
      />
      <Input
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
        placeholder="LAST NAME"
      />
      <InputAge
        value={formData.age}
        onChange={handleChange}
        name="age"
        placeholder="AGE"
      />
      <Multiple value={gender} onChange={handleSelect} />
      {canSubmit_V2(formData) ? (
        <ButtonTodo handleSubmit={handleSubmit} formData={formData} />
      ) : (
        <button className={styles.disable}></button>
      )}

      <Notes handleDelete={handleDelete} list={list} />
    </div>
  );
}
