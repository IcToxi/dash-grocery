# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class QRCodeSVG(Component):
    """A QRCodeSVG component.
Wrapped from [qrcode.react](https://github.com/zpao/qrcode.react).

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- bgColor (string; optional):
    \"#FFFFFF\".

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- fgColor (string; optional):
    \"#000000\".

- imageSettings (dict; optional)

    `imageSettings` is a dict with keys:

    - excavate (boolean; optional)

    - height (number; optional)

    - src (string; optional)

    - width (number; optional)

    - x (number; optional):
        none, will center.

    - y (number; optional):
        none, will center.

- includeMargin (boolean; optional)

- level (string; optional):
    ('L' 'M' 'Q' 'H').

- size (number; optional)

- value (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, class_name=Component.UNDEFINED, value=Component.UNDEFINED, size=Component.UNDEFINED, bgColor=Component.UNDEFINED, fgColor=Component.UNDEFINED, level=Component.UNDEFINED, includeMargin=Component.UNDEFINED, imageSettings=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bgColor', 'class_name', 'fgColor', 'imageSettings', 'includeMargin', 'level', 'size', 'value']
        self._type = 'QRCodeSVG'
        self._namespace = 'dash_grocery'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bgColor', 'class_name', 'fgColor', 'imageSettings', 'includeMargin', 'level', 'size', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(QRCodeSVG, self).__init__(**args)
