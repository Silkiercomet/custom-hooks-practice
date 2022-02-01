import { useState } from "react";

const useTodo = (init) => {
  const [todos, setTodos] = useState(init);
  const [inputText, setText] = useState();
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo() {
    const newId = Date.now();

    setTodos([...todos, { id: newId, text: inputText }]);
  }

  return [todos, addTodo, removeTodo, setText, inputText];
};

export default useTodo;
