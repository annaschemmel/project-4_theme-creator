import { createElement, useState } from "react";
import Color from "./Color";

export default function Colorform() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted form");

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    // ---> should this whole "create card" be in a different document and not in the "ColorForm"?
    // ---> uid? -> should the package be added/imported int the Color.jsx and then added to the Color.jsx?
    // ---> how do we append the new card to the top of the card list / after the form (there's no "card-list", the cards come directly after the form)

    //console.log(`${createElement(<Color color={data} />)}`);
    document.body.append(`${createElement(<Color color={data} />)}`); //currently only returns [object Object]

    // ---> currently only resetting the text input field -> should I
    event.target.reset();
  }

  const [colorHex, setColorHex] = useState("#f43497");
  //console.log(colorHex);
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
