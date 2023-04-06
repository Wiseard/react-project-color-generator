import { useState } from 'react'
import { toast } from 'react-toastify'

export const Color = ({ color, index }) => {
  const [copy, setCopy] = useState('')
  const { hex, weight } = color
  async function copyToClipboard(text) {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text)
        toast.success(`color #${hex} copied`)
      } catch (error) {
        toast.error(error.message)
      }
    } else {
      toast.error('Clipboard access not available')
    }
  }
  return (
    <article
      className={`color ${index > 10 ? 'title-white' : 'title-black'}`}
      style={{ backgroundColor: `#${hex}` }}
      onClick={() => copyToClipboard(`#${hex}`)}
    >
      <h3>{weight}%</h3>
      <p>#{hex}</p>
    </article>
  )
}
