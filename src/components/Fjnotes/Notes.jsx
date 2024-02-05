const Notes = ({ handleDelete, list }) => {
  return (
    <div className="notes">
      {console.log({ list })}
      {list.map(({ id, name, gender,lastName,age }) => (
        <ul key={id} className="ul">
          <li>
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
          <button className="onButton" onClick={() => handleDelete(id)}>
            X
          </button>
        </ul>
      ))}
    </div>
  );
};
export default Notes;
