# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Barcode(Component):
    """A Barcode component.
Wrapped from [react-barcode](https://github.com/kciter/react-barcode).

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- background (string; default "#ffffff"):
    Set the background of the barcode.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- displayValue (boolean; default True)

- flat (string; optional):
    Only for EAN8/EAN13.

- font (string; default "monospace"):
    Define the font used for the text in the generated barcode. This
    can be any default font or a font defined by a @font-face rule.

- fontOptions (string; default ""):
    With fontOptions you can add bold or italic text to the barcode.

- fontSize (number; default 20):
    Set the size of the text.

- format (string; default "CODE128"):
    Select which barcode type to use.  Please check the wikipage of
    the different barcode types for more information.

- height (number; default 100):
    The height of the barcode.

- lineColor (string; default "#000000"):
    Set the color of the bars and the text.

- margin (number; default 10):
    Set the space margin around the barcode.  If nothing else is set,
    all side will inherit the margins property but can be replaced if
    you want to set them separably.

- marginBottom (number; optional)

- marginLeft (number; optional)

- marginRight (number; optional)

- marginTop (number; optional)

- text (string; optional):
    Overide the text that is diplayed.

- textAlign (string; default "center"):
    Set the horizontal alignment of the text. Can be left / center /
    right.

- textMargin (number; default 2):
    Set the space between the barcode and the text.

- textPosition (string; default "bottom"):
    Set the vertical position of the text. Can be bottom / top.

- value (string | number; optional)

- width (number; default 2):
    The width option is the width of a single bar."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, class_name=Component.UNDEFINED, value=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, format=Component.UNDEFINED, displayValue=Component.UNDEFINED, text=Component.UNDEFINED, fontOptions=Component.UNDEFINED, font=Component.UNDEFINED, textAlign=Component.UNDEFINED, textPosition=Component.UNDEFINED, textMargin=Component.UNDEFINED, fontSize=Component.UNDEFINED, background=Component.UNDEFINED, lineColor=Component.UNDEFINED, margin=Component.UNDEFINED, marginTop=Component.UNDEFINED, marginBottom=Component.UNDEFINED, marginLeft=Component.UNDEFINED, marginRight=Component.UNDEFINED, flat=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'background', 'class_name', 'displayValue', 'flat', 'font', 'fontOptions', 'fontSize', 'format', 'height', 'lineColor', 'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'text', 'textAlign', 'textMargin', 'textPosition', 'value', 'width']
        self._type = 'Barcode'
        self._namespace = 'dash_grocery'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'background', 'class_name', 'displayValue', 'flat', 'font', 'fontOptions', 'fontSize', 'format', 'height', 'lineColor', 'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'text', 'textAlign', 'textMargin', 'textPosition', 'value', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Barcode, self).__init__(**args)
