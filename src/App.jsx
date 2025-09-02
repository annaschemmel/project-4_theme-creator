import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import Colorform from "./Components/Color/ColorForm";
import "./App.css";

function App() {
  // colors.js (array initial colors) is what is being mapped here
  // we don't want to change that variable/array so we add a new variable/useState here in app ("colors")
  // the information that we get from the form is used to add new cards to the newly created "colors"-variable
  // we use the setterfunction "setColors" to do that
  // add a new handleSubmit to the colorform
  // inside the handleSubmit we do the stuff described above
  // -> the form gives the information to the parent (app)
  // -> the parent (app) gives it back to colors-variable (which is then mapped into the list)

  const [colors, setColors] = useState(initialColors);

  function addNewColor(newColor) {
    console.log("new color that's added", newColor);
    setColors([newColor, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <Colorform onAddColor={addNewColor} />

      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
