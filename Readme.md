
# Style

  Style Canvas renders using CSS.

## Installation

```
$ component install component/style
```

## Example

```css
body {
  font-size: 18px;
}
.progress {
  background: #fff;
}
.progress .percentage {
  color: #ddd;
}
```

```js
style('.progress', 'background-color');
// => 'rgb(255, 255, 255)'

style('.progress .percentage', 'color');
// => 'rgb(221, 221, 221)'

style('.progress .percent', 'font-size');
// => '18px'
```

## About

  This component exists so that you can influence aspects of your
  Canvas renders using CSS, where style decisions belong. For details
  view this [blog post](http://tjholowaychuk.com/post/6339741902/styling-canvas-drawings-with-css).

## License

  MIT