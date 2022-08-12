import ObjectType from './object'
import ValueType from './value'
import ArrayType from './array'

const Type = props => {
  const { value } = props

  if (Array.isArray(value)) {
    return <ArrayType value={value} />
  }

  if (typeof value === 'object') {
    return <ObjectType value={value} />
  }

  return <ValueType value={value} />
}

export default Type
