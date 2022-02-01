import { useState, useEffect } from "react";
const initialValue = { x: null, y: null };
const useMouse = () => {
  const [position, setPosition] = useState(initialValue);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({
        x: clientX,
        y: clientY
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
};

export default useMouse;
