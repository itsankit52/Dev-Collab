
import { useState } from 'react'

const CodeEditor = ({ initialValue = '', onChange }) => {
  const [code, setCode] = useState(initialValue)

  const handleChange = (e) => {
    setCode(e.target.value)
    onChange?.(e.target.value)
  }

  return (
    <textarea
      className="code-editor"
      value={code}
      onChange={handleChange}
      placeholder="Write your code here..."
      spellCheck={false}
    />
  )
}

export default CodeEditor