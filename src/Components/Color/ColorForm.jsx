//import { useState } from "react";
import ColorInput from "./ColorInput";
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

  return (
    <form className="colorform" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" name="role" required />

      <label htmlFor="hex">Hex</label>
      <ColorInput name="hex" defaultValue="#ffdb5a" />

      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput name="contrastText" defaultValue="#1e0eb0" />

      <button type="submit">Add color</button>
    </form>
  );
}
