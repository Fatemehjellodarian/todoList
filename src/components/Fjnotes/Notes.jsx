import style from "./Notes.module.css";
const Notes = ({ handleDelete, list }) => {
  return (
    <div id="notes">
      {console.log(list.length)}
      {list.map(({ id, name, gender, lastName, age }) => (
        <ul key={id} className={style.notes}>
          <li className="">
            <span>Name:</span>
            {name}
          </li>
          <li>
            <span>LastName:{lastName}</span>
          </li>
          <li>
            <span className="age">Age:{age}</span>
          </li>
          <li>
            <span className="gender">Gender:</span>
            {gender}
          </li>
          <button className={style.deleteBtn} onClick={() => handleDelete(id)}>
            X
          </button>
        </ul>
      ))}
    </div>
  );
};
export default Notes;
