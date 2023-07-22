const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className="form-container">
      <input
        value={inputText}
        onChange={handleInputText}
        type="text"
        className="todo-input"
      />
      <button onClick={handleClick} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incompleted">Incompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
