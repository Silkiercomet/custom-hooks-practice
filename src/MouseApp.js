import useMouse from "./hooks/useMouse";
const MouseApp = () => {
  const position = useMouse();
  return (
    <section>
      <h1>ONMauseMove</h1>
      <div>
        <h3>X : {position.x}</h3>
        <h3>Y : {position.y}</h3>
      </div>
    </section>
  );
};
export default MouseApp;
