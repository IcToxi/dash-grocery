# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Textfit(Component):
    """A Textfit component.
Wrapped from [react-textfit](https://github.com/malte-wessel/react-textfit).

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- forceSingleModeWidth (boolean; optional):
    (Boolean) When mode is single and forceSingleModeWidth is True,
    the element's height will be ignored.  Default is True.

- max (number; optional):
    (Number) Maximum font size in pixel. Default is 100.

- min (number; optional):
    (Number) Minimum font size in pixel. Default is 1.

- mode (string; optional):
    (single|multi) Algorithm to fit the text. Use single for headlines
    and multi for paragraphs. Default is multi.

- throttle (number; optional):
    (Number) Window resize throttle in milliseconds. Default is 50."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, class_name=Component.UNDEFINED, mode=Component.UNDEFINED, forceSingleModeWidth=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, throttle=Component.UNDEFINED, onReady=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'class_name', 'forceSingleModeWidth', 'max', 'min', 'mode', 'throttle']
        self._type = 'Textfit'
        self._namespace = 'dash_grocery'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'class_name', 'forceSingleModeWidth', 'max', 'min', 'mode', 'throttle']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Textfit, self).__init__(children=children, **args)
