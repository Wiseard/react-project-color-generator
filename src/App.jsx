import Values from 'values.js'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Form } from './Form'
import { ColorList } from './ColorList'

const App = () => {
  const [color, setColor] = useState('#458098')
  const [colorList, setColorList] = useState(new Values('#458098').all(10))
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10)
      setColorList(newColor)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <main>
      <Form setColor={setColor} addColor={addColor} color={color} />
      <ColorList colorList={colorList} />
      <ToastContainer position="top-right" />
    </main>
  )
}

export default App
