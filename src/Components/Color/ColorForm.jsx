import { useState } from "react";
//import Color from "./Color";

export default function Colorform({ onAddColor }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted form");

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddColor(data);

    //console.log(data);
    event.target.reset();
  }

  const [colorHex, setColorHex] = useState("#f43497");
  const [contrastText, setContrastText] = useState("#140f45");

  return (
    <form className="colorform" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" name="role" required />
      <label htmlFor="hex">Hex</label>
      <input type="text" name="hex" value={colorHex} />
      <input
        type="color"
        name="hexColor"
        id="hexColor"
        value={colorHex}
        onChange={(e) => setColorHex(e.target.value)}
      />
      <label htmlFor="contrastText">Contrast Text</label>
      <input type="text" name="contrastText" value={contrastText} />
      <input
        type="color"
        name="contrastTextColor"
        id="hex-color"
        value={contrastText}
        onChange={(e) => setContrastText(e.target.value)}
      />
      <button type="submit">Add color</button>
    </form>
  );
}
