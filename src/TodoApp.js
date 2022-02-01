import useTodo from "./hooks/useTodo";
let init = [
  { id: 1, text: "hola" },
  { id: 2, text: "como estas" }
];
const TodoApp = () => {
  const [todos, addTodo, removeTodo, setText, inputText] = useTodo(init);
  return (
    <section>
      <h1>TodoApp</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setText(e.target.value)}
        />
        <button>add</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>delete</button>{" "}
          </div>
        ))}
      </div>
    </section>
  );
};
export default TodoApp;
