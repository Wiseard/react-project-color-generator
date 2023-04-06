import { nanoid } from 'nanoid'
import { Color } from './Color'

export const ColorList = ({ colorList }) => {
  return (
    <section className="color-list">
      {colorList.map((color, index) => {
        return <Color color={color} key={nanoid()} index={index} />
      })}
    </section>
  )
}
