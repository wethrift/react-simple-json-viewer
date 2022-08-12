import { useState } from 'react'
import Type from './type'

const KeyExpander = props => {
  const { keyName, value, startExpanded = false } = props
  const [expanded, setExpanded] = useState(startExpanded)

  if (typeof value !== 'object' && !Array.isArray(value)) {
    return (
      <>
        <span>{keyName}: </span>
        <Type value={value} />
      </>
    )
  }

  return (
    <>
      <span onClick={() => setExpanded(prev => !prev)}>
        [{expanded ? '-' : '+'}]{' '}
      </span>
      <span>{keyName}: </span>
      {expanded && <Type value={value} />}
    </>
  )
}

const ObjectType = props => {
  const { value } = props

  return (
    <ul>
      {Object.keys(value || {}).map(k => (
        <li key={k}>
          <KeyExpander keyName={k} value={value[k]} />
        </li>
      ))}
    </ul>
  )
}

export default ObjectType
