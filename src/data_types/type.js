import React from 'react'
import ObjectType from './object'
import ValueType from './value'
import ArrayType from './array'

const Type = props => {
  const { value, ...rest } = props

  if (Array.isArray(value)) {
    return <ArrayType value={value} {...rest} />
  }

  if (typeof value === 'object') {
    return <ObjectType value={value} {...rest} />
  }

  return <ValueType value={value} {...rest} />
}

export default Type
