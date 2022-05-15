# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Clock(Component):
    """A Clock component.
Wrapped from [react-live-clock](https://github.com/pvoznyuk/react-live-clock).

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    date can be set as a children prop.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- date (string; optional):
    Date to output, If nothing is set then it take current date.

- format (string; optional):
    Formatting from moment.js library.

- interval (number; optional):
    Auto-updating period for the clock. 1 second is a default value.

- locale (string; optional):
    Changes the language of the component via prop.

- ticking (boolean; optional):
    If you want the clock to be auto-updated every interval seconds.

- timezone (string; optional):
    If timezone is set, the date is show in this timezone.  You can
    find the list. here, the TZ column."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, class_name=Component.UNDEFINED, date=Component.UNDEFINED, format=Component.UNDEFINED, locale=Component.UNDEFINED, filter=Component.UNDEFINED, timezone=Component.UNDEFINED, ticking=Component.UNDEFINED, interval=Component.UNDEFINED, onChange=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'class_name', 'date', 'format', 'interval', 'locale', 'ticking', 'timezone']
        self._type = 'Clock'
        self._namespace = 'dash_grocery'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'class_name', 'date', 'format', 'interval', 'locale', 'ticking', 'timezone']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Clock, self).__init__(children=children, **args)
