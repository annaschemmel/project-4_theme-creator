export default function Colorform() {
  return (
    //  function handleSubmit(event) {
    //  event.preventDefault()
    //  }

    <form className="colorform">
      <label htmlFor="role">Role</label>
      <input type="text" name="role" />
      <label htmlFor="hex">Hex</label>
      <input type="text" name="hex" />
      <input type="color" name="hexColor" id="hexColor" />
      <label htmlFor="contrastText">Contrast Text</label>
      <input type="text" name="contrastText" />
      <input type="color" name="contrastTextColor" id="hex-color" />
      <button type="submit">Add color</button>
    </form>
  );
}
