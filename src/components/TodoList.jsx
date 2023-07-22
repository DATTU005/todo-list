import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="card">
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              todos={todos}
              todo={todo}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
