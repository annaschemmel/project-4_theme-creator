import { useState } from "react";

export default function ColorInput({ name, defaultValue }) {
  const [color, setColor] = useState(defaultValue);

  return (
    <>
      <input
        type="text"
        name={name}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="color"
        name={name}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </>
  );
}
