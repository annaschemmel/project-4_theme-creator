//import { useState } from "react";
import ColorInput from "./ColorInput";
//import Color from "./Color";

export default function Colorform({
  onAddColor,
  defaultValue = { hex: "#cf3a3a", contrastText: "#2743e4" },
}) {
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
      <ColorInput name="hex" defaultValue={defaultValue.hex} />

      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput
        name="contrastText"
        defaultValue={defaultValue.contrastText}
      />

      <button type="submit">Add color</button>
    </form>
  );
}
