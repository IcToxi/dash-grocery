# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LazyLoad(Component):
    """A LazyLoad component.
Wrapped from [react-lazyload](https://github.com/twobin/react-lazyload).
Lazyload your Components, Images or anything matters the performance.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Type: Node Default: undefined **NOTICE** Only one child is allowed
    to be passed.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- classNamePrefix (string; default 'lazyload'):
    Type: String Default: `lazyload` While rendering, Lazyload will
    add some elements to the component tree in addition to the wrapped
    *component children. The `classNamePrefix` prop allows the user to
    supply their own custom class prefix to help:    # Avoid class
    conflicts on an implementing app    # Allow easier custom styling
    These being:    # A wrapper div, which is present at all times
    (default ).

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- debounce (number | boolean; optional):
    Type: Bool / Number Default: undefined Lazyload will try to use
    [passive event](https://github.com/WICG/EventListenerOptions/blob/
    gh-pages/*explainer.md) by default to improve scroll/resize event
    handler's performance. If you  prefer *control this behaviour by
    yourself, you can set `debounce` or `throttle` to enable built in
    delay *feature. If you provide a number, that will be how many
    `ms` to wait; if you provide `True`, the wait time  *defaults to
    `300ms`. **NOTICE** Set `debounce` / `throttle` to all lazy loaded
    components unanimously, if you don't,  the *first occurrence is
    respected.
    [demo](https://twobin.github.io/react-lazyload/examples/#/debounce).

- height (number | string; optional):
    Type: Number/String Default: undefined In the first round of
    render, LazyLoad will render a placeholder for your component if
    no  *placeholder is provided and measure if this component is
    visible. Set `height` properly will make  *LazyLoad calculate more
    precisely. The value can be number or string like `'100%'`. You
    can also  *use css to set the height of the placeholder instead of
    using `height`.

- offset (number | list; default 0):
    Type: Number/Array(Number) Default: 0 Say if you want to preload a
    component even if it's 100px below the viewport (user have to
    scroll  *100px more to see this component), you can set `offset`
    props to `100`. On the other hand, if you  *want to delay loading
    a component even if it's top edge has already appeared at
    viewport, set  *`offset` to negative number. Library supports
    horizontal lazy load out of the box. So when you provide this prop
    with number  *like `100` it will automatically set left edge
    offset to `100` and top edge to `100`; If you provide this prop
    with array like `[100, 200]`, it will set left edge offset to
    `100` and  *top offset to `200`.

- once (boolean; default False):
    Type: Bool Default: False Once the lazy loaded component is
    loaded, do not detect scroll/resize event anymore. Useful for
    *images or simple components.

- overflow (boolean; default False):
    Type: Bool Default: False If lazy loading components inside a
    overflow container, set this to `True`. Also make sure a
    *`position` property other than `static` has been set to your
    overflow container.
    [demo](https://twobin.github.io/react-lazyload/examples/#/overflow).

- placeholder (boolean | number | string | dict | list; optional):
    Type: Any Default: undefined Specify a placeholder for your lazy
    loaded component.
    [demo](https://twobin.github.io/react-lazyload/examples/#/placeholder)
    **If you provide your own placeholder, do remember add appropriate
    `height` or `minHeight` to your  *placeholder element for better
    lazyload performance.**.

- resize (boolean; default False):
    Type: Bool Default: False Respond to `resize` event, set it to
    `True` if you do need LazyLoad listen resize event. **NOTICE** If
    you tend to support legacy IE, set this props carefully, refer to
    [this question]*
    (http://stackoverflow.com/questions/1852751/window-resize-event-firing-in-internet-explorer)
    for  *further reading.

- scroll (boolean; default True):
    Type: Bool Default: True Listen and react to scroll event.

- scrollContainer (a list of or a singular dash component, string or number | string; optional):
    Type: String/DOM node Default: undefined Pass a query selector
    string or DOM node. LazyLoad will attach to the window object's
    scroll  events *if no container is passed.

- style (dict; optional):
    Type: Object Default: undefined Similar to
    [classNamePrefix](#classNamePrefix), the `style` prop allows users
    to pass custom CSS  *styles to wrapper div.

- throttle (number | boolean; optional):
    Type: Bool / Number Default: undefined Lazyload will try to use
    [passive event](https://github.com/WICG/EventListenerOptions/blob/
    gh-pages/*explainer.md) by default to improve scroll/resize event
    handler's performance. If you  prefer *control this behaviour by
    yourself, you can set `debounce` or `throttle` to enable built in
    delay *feature. If you provide a number, that will be how many
    `ms` to wait; if you provide `True`, the wait time  *defaults to
    `300ms`. **NOTICE** Set `debounce` / `throttle` to all lazy loaded
    components unanimously, if you don't,  the *first occurrence is
    respected.
    [demo](https://twobin.github.io/react-lazyload/examples/#/debounce).

- unmountIfInvisible (boolean; default False):
    Type: Bool Default: False The lazy loaded component is unmounted
    and replaced by the placeholder when it is no longer  visible *in
    the viewport."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, class_name=Component.UNDEFINED, scrollContainer=Component.UNDEFINED, height=Component.UNDEFINED, once=Component.UNDEFINED, offset=Component.UNDEFINED, scroll=Component.UNDEFINED, resize=Component.UNDEFINED, overflow=Component.UNDEFINED, placeholder=Component.UNDEFINED, unmountIfInvisible=Component.UNDEFINED, debounce=Component.UNDEFINED, throttle=Component.UNDEFINED, classNamePrefix=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'classNamePrefix', 'class_name', 'debounce', 'height', 'offset', 'once', 'overflow', 'placeholder', 'resize', 'scroll', 'scrollContainer', 'style', 'throttle', 'unmountIfInvisible']
        self._type = 'LazyLoad'
        self._namespace = 'dash_grocery'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'classNamePrefix', 'class_name', 'debounce', 'height', 'offset', 'once', 'overflow', 'placeholder', 'resize', 'scroll', 'scrollContainer', 'style', 'throttle', 'unmountIfInvisible']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LazyLoad, self).__init__(children=children, **args)
