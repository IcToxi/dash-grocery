# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ParticlesBg(Component):
    """A ParticlesBg component.
Wrapped from [particles-bg](https://github.com/lindelof/particles-bg).

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- bg (boolean | dict | string; default True):
    Eliminate dom's className without triggering animation.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- color (string | list of strings; default 'random'):
    The background color or particle color of the particle scene.

- config (dict; optional):
    You can use type=\"custom\" to achieve a higher degree of freedom
    for the particle background.

    `config` is a dict with keys:

    - alpha (number | list; optional)

    - body (string; optional)

    - color (string | list of strings; optional)

    - cross (string; optional)

    - f (number | list; optional)

    - func (optional)

    - g (number; optional)

    - life (number | list; optional)

    - num (number | list; optional)

    - position (string; optional)

    - radius (number | list; optional)

    - random (number | boolean; optional)

    - rotate (number | list; optional)

    - rps (number; optional)

    - scale (number | list; optional)

    - tha (number | list; optional)

    - v (number | list; optional)

- num (number; optional):
    The number of particles emitted each time, generally not set.

- type (string; default 'random'):
    The type of particle animation. \"color\", \"ball\", \"lines\",
    \"thick\", \"circle\", \"cobweb\" ,\"polygon\", \"square\",
    \"tadpole\", \"fountain\", \"random\", \"custom\"."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, class_name=Component.UNDEFINED, type=Component.UNDEFINED, num=Component.UNDEFINED, color=Component.UNDEFINED, bg=Component.UNDEFINED, config=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bg', 'class_name', 'color', 'config', 'num', 'type']
        self._type = 'ParticlesBg'
        self._namespace = 'dash_grocery'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bg', 'class_name', 'color', 'config', 'num', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ParticlesBg, self).__init__(**args)
