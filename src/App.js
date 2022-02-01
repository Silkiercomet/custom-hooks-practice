import "./styles.css";
import Counter from "./Counter";
import MouseApp from "./MouseApp";
import TodoApp from "./TodoApp";
export default function App() {
  return (
    <div className="App">
      <Counter />
      <div className="line" />
      <MouseApp />
      <div className="line" />
      <TodoApp />
    </div>
  );
}
