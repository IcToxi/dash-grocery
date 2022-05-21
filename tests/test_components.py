import pytest
import pkgutil
import examples
from dash.testing.application_runners import import_app


components = [
    n for f, n, i in pkgutil.iter_modules(examples.__path__, examples.__name__ + ".")
]


@pytest.mark.parametrize("component", components)
def test_render_components(dash_duo, component):
    app = import_app(f"{component}")
    dash_duo.start_server(app)
