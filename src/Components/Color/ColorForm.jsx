//import { useState } from "react";
import ColorInput from "./ColorInput";
//import Color from "./Color";

export default function Colorform({
  onSubmitColor,
  defaultValue = { hex: "#cf3a3a", contrastText: "#2743e4" },
  buttonText,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted form");

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmitColor(data);

    //console.log(data);
    event.target.reset();
  }

  return (
    <form className="colorform" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        defaultValue={defaultValue.role}
        required
      />

      <label htmlFor="hex">Hex</label>
      <ColorInput name="hex" defaultValue={defaultValue.hex} />

      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput
        name="contrastText"
        defaultValue={defaultValue.contrastText}
      />

      <button type="submit">{buttonText}</button>
    </form>
  );
}
