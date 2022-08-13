import { css } from '@emotion/css'

const JsonViewer = props => {
  return (
    <div
      className={css({
        fontFamily: 'monospace',
        color: '#333',
        'span.rsjv-expander': {
          color: '#888',
        },
        'span.rsjv-expander:hover': {
          pointer: 'cursor',
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
