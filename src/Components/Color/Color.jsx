import "./Color.css";
import { useState } from "react";
import Colorform from "./ColorForm";

export default function Color({ color, onDeleteColor, onSubmitColor, id }) {
  //console.log("Find Issue 1");
  const [isVisible, setIsVisible] = useState("default");
  console.log(isVisible);

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

      {/* we have 3 states here that we want to switch between
       (default - only infos and buttons, delete - cancel and delete button, edit - input fields and confirm button) */}

      {isVisible === "default" && (
        <>
          <button onClick={() => setIsVisible("delete")}>Delete</button>
          <button onClick={() => setIsVisible("edit")}>Edit</button>
        </>
      )}

      {isVisible === "delete" && (
        <>
          <p className="color-card-headline">Really delete?</p>
          <button onClick={() => setIsVisible("default")}>Cancel</button>
          <button title="delete movie" onClick={() => onDeleteColor(id)}>
            Delete
          </button>
        </>
      )}

      {isVisible === "edit" && (
        <>
          <Colorform
            defaultValue={color}
            buttonText={"Update Color"}
            onSubmitColor={(updatedData) => {
              onSubmitColor({ id, ...updatedData });
              setIsVisible("default");
            }}
            //onSubmitColor is the prop that we give this form from App
            //updatedData is the stuff that the form gives us when submitting it
            //onSubmitColor is the handlerfunction(handleEditColor) that was assigned to this prop
            //the spread here add the 3 attributes from the form (role,hex,contrast) to the id (wee need all 4 of them)
            //these 4 things are then given back to App
          />
          <button onClick={() => setIsVisible("default")}>Cancel</button>
        </>
      )}
    </div>
  );
}
