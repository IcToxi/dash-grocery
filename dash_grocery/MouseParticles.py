# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MouseParticles(Component):
    """A MouseParticles component.
Wrapped from [react-mouse-particles](https://github.com/lindelof/react-mouse-particles).

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- alpha (number; default .1):
    The alpha of every particle.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- color (string | list of strings; default 'random'):
    Particle color.

- cull (string; optional):
    Eliminate dom's className without triggering animation.

- g (number; default 1):
    Whether to add gravity.

- level (number; default 6):
    Detect levels of culling animation.

- life (number; default 1.2):
    The life of every particle.

- num (number; default 3):
    The number of particles emitted each time.

- radius (number; default 10):
    The radius of every particle.

- tha (number; default 20):
    The Particle emitter angle.

- v (number; default .5):
    The Particle emitter Particle velocity."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, class_name=Component.UNDEFINED, g=Component.UNDEFINED, num=Component.UNDEFINED, radius=Component.UNDEFINED, alpha=Component.UNDEFINED, tha=Component.UNDEFINED, v=Component.UNDEFINED, life=Component.UNDEFINED, color=Component.UNDEFINED, cull=Component.UNDEFINED, level=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'alpha', 'class_name', 'color', 'cull', 'g', 'level', 'life', 'num', 'radius', 'tha', 'v']
        self._type = 'MouseParticles'
        self._namespace = 'dash_grocery'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'alpha', 'class_name', 'color', 'cull', 'g', 'level', 'life', 'num', 'radius', 'tha', 'v']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MouseParticles, self).__init__(**args)
