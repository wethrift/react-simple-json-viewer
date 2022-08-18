# react-simple-json-viewer

A basic lightweight React (jsx) component for viewing data in an expandable way.

[img]

# Usage

```
npm install react-simple-json-viewer
```

Then inside some react component:

```
import JSONViewer from 'react-simple-json-viewer'

// Place your component as needed
<JSONViewer data={myData}/>
```

The `data` prop passed in can be any object, array, or value.

# Styling

This library utilises Emotion's [css](https://emotion.sh/docs/@emotion/css#object-styles) function to generate top level classes for styling. If you look at index.js in /src you will see the default minimal styles applied to the container and children. To override the default styling just use the `css` prop when using the component. For example, to change the color of the values:

```
<JSONViewer data={data} css={{
  'span.rsjv-value': {
    color: 'purple'
  }
}}>
```

# SSR

As the library depends on a recent version of emotion, SSR should work out of the box. However depending on your SSR setup, you may need to do something more complicated, in which case please refer to the Emotion [SSR docs](https://emotion.sh/docs/ssr).

# Credits

This library was built [@wethrift](https://www.wethrift.com) by [@matt-way](https://github.com/matt-way)
