import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDeleteColor, id }) {
  //console.log("Find Issue 1");
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {isVisible && (
        <button onClick={() => setIsVisible(!isVisible)}>Delete</button>
      )}
      {!isVisible && (
        <div>
          <p className="color-card-headline">Really delete?</p>
          <button onClick={() => setIsVisible(!isVisible)}>Cancel</button>
          <button title="delete movie" onClick={() => onDeleteColor(id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
