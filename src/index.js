import React from 'react'
import { css } from '@emotion/css'
import Type from './data_types/type'

const JsonViewer = props => {
  return (
    <div
      className={css({
        fontFamily: 'monospace',
        color: '#333',
        '& ul, & li': {
          listStyleType: 'none',
        },
        'ul:first-child': {
          padding: 0,
        },
        'span.rsjv-expander': {
          color: '#888',
        },
        'span.rsjv-expander:hover': {
          cursor: 'pointer',
        },
        'span.rsjv-value': {
          color: '#3d94bf',
          overflowWrap: 'anywhere',
        },
        ...props.css,
      })}
    >
      <Type value={props.data} />
    </div>
  )
}

export default JsonViewer
