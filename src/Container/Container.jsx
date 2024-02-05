import { useState } from "react";
import Avatar from "../components/Fjimages/Avatar";
import TodoList from "../components/TodoList/TodoList";

function Container() {
  const [gender, setGender] = useState("male");

  return (
    <div>
      <Avatar gender={gender} />
      <TodoList gender={gender} setGender={setGender} />
    </div>
  );
}

export default Container;
