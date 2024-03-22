import React, { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);
  return (
    <div className="hidden lg:flex">
      <div
        className="cursor-dot bg-base-content"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div
        className="cursor-outline"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </div>
  );
}

export default Cursor;
