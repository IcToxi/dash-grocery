% Auto-generated: do not edit by hand
\name{lazyLoad}

\alias{lazyLoad}

\title{LazyLoad component}

\description{
Wrapped from [react-lazyload](https://github.com/twobin/react-lazyload). Lazyload your Components, Images or anything matters the performance.
}

\usage{
lazyLoad(children=NULL, id=NULL, classNamePrefix=NULL,
class_name=NULL, debounce=NULL, height=NULL, offset=NULL,
once=NULL, overflow=NULL, placeholder=NULL, resize=NULL,
scroll=NULL, scrollContainer=NULL, style=NULL,
throttle=NULL, unmountIfInvisible=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Type: Node Default: undefined
**NOTICE**
Only one child is allowed to be passed.}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{classNamePrefix}{Character. Type: String Default: `lazyload`
While rendering, Lazyload will add some elements to the component tree in addition to the wrapped  *component children.
The `classNamePrefix` prop allows the user to supply their own custom class prefix to help:
   # Avoid class conflicts on an implementing app
   # Allow easier custom styling
These being:
   # A wrapper div, which is present at all times (default )}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{debounce}{Numeric | logical. Type: Bool / Number Default: undefined
Lazyload will try to use [passive event](https://github.com/WICG/EventListenerOptions/blob/ gh-pages/*explainer.md) by default to improve scroll/resize event handler's performance. If you  prefer *control this behaviour by yourself, you can set `debounce` or `throttle` to enable built in  delay *feature.
If you provide a number, that will be how many `ms` to wait; if you provide `true`, the wait time  *defaults to `300ms`.
**NOTICE** Set `debounce` / `throttle` to all lazy loaded components unanimously, if you don't,  the *first occurrence is respected.
[demo](https://twobin.github.io/react-lazyload/examples/#/debounce)}

\item{height}{Numeric | character. Type: Number/String Default: undefined
In the first round of render, LazyLoad will render a placeholder for your component if no  *placeholder is provided and measure if this component is visible. Set `height` properly will make  *LazyLoad calculate more precisely. The value can be number or string like `'100\%'`. You can also  *use css to set the height of the placeholder instead of using `height`.}

\item{offset}{Numeric | unnamed list. Type: Number/Array(Number) Default: 0
Say if you want to preload a component even if it's 100px below the viewport (user have to scroll  *100px more to see this component), you can set `offset` props to `100`. On the other hand, if you  *want to delay loading a component even if it's top edge has already appeared at viewport, set  *`offset` to negative number.
Library supports horizontal lazy load out of the box. So when you provide this prop with number  *like `100` it will automatically set left edge offset to `100` and top edge to `100`;
If you provide this prop with array like `[100, 200]`, it will set left edge offset to `100` and  *top offset to `200`.}

\item{once}{Logical. Type: Bool Default: false
Once the lazy loaded component is loaded, do not detect scroll/resize event anymore. Useful for  *images or simple components.}

\item{overflow}{Logical. Type: Bool Default: false
If lazy loading components inside a overflow container, set this to `true`. Also make sure a  *`position` property other than `static` has been set to your overflow container.
[demo](https://twobin.github.io/react-lazyload/examples/#/overflow)}

\item{placeholder}{Logical | numeric | character | named list | unnamed list. Type: Any Default: undefined
Specify a placeholder for your lazy loaded component.
[demo](https://twobin.github.io/react-lazyload/examples/#/placeholder)
**If you provide your own placeholder, do remember add appropriate `height` or `minHeight` to your  *placeholder element for better lazyload performance.**}

\item{resize}{Logical. Type: Bool Default: false
Respond to `resize` event, set it to `true` if you do need LazyLoad listen resize event.
**NOTICE** If you tend to support legacy IE, set this props carefully, refer to [this question]* (http://stackoverflow.com/questions/1852751/window-resize-event-firing-in-internet-explorer) for  *further reading.}

\item{scroll}{Logical. Type: Bool Default: true
Listen and react to scroll event.}

\item{scrollContainer}{A list of or a singular dash component, string or number | character. Type: String/DOM node Default: undefined
Pass a query selector string or DOM node. LazyLoad will attach to the window object's scroll  events *if no container is passed.}

\item{style}{Named list. Type: Object Default: undefined
Similar to [classNamePrefix](#classNamePrefix), the `style` prop allows users to pass custom CSS  *styles to wrapper div.}

\item{throttle}{Numeric | logical. Type: Bool / Number Default: undefined
Lazyload will try to use [passive event](https://github.com/WICG/EventListenerOptions/blob/ gh-pages/*explainer.md) by default to improve scroll/resize event handler's performance. If you  prefer *control this behaviour by yourself, you can set `debounce` or `throttle` to enable built in  delay *feature.
If you provide a number, that will be how many `ms` to wait; if you provide `true`, the wait time  *defaults to `300ms`.
**NOTICE** Set `debounce` / `throttle` to all lazy loaded components unanimously, if you don't,  the *first occurrence is respected.
[demo](https://twobin.github.io/react-lazyload/examples/#/debounce)}

\item{unmountIfInvisible}{Logical. Type: Bool Default: false
The lazy loaded component is unmounted and replaced by the placeholder when it is no longer  visible *in the viewport.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

