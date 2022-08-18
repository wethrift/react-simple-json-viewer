declare module 'react-simple-json-viewer' {
  import { CSSInterpolation } from '@emotion/serialize'

  export type ReactSimpleJsonViewerProps = {
    data: any
    css: CSSInterpolation
  }

  export default function JSONViewer(
    props: ReactSimpleJsonViewerProps
  ): JSX.Element
}
