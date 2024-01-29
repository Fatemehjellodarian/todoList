const Notes = ({ handleDelete, list }) => {
    return (
      <div className="notes">
        {list.map(({ id, name, gender }) => (
          <ul key={id} className="ul">
            <li>
              <span>Name:</span>
              {name}
            </li>
            <li>
              <span>Gender:</span>
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
  