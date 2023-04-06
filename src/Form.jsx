export const Form = ({ color, addColor, setColor }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="input-color" className="label-color">
        color generator
      </label>
      <input
        type="color"
        id="color"
        className="input-set-color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <input
        type="text"
        id="input-color"
        className="input-set-text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button style={{ backgroundColor: color }} className="btn" type="submit">
        submit
      </button>
    </form>
  )
}
