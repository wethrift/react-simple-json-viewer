import { css } from '@emotion/core'

const JsonViewer = props => {
  return (
    <div
      className={css({
        fontFamily: 'monospace',
        ...props.css,
      })}
    >
      <Type value={props.data} />
    </div>
  )
}

export default JsonViewer
