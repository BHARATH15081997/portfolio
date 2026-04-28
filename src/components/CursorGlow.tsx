import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`,
        width: "160px",
        height: "160px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
};

export default CursorGlow;
