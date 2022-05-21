import os
import pytest
from dash.testing.application_runners import import_app


##for root, ds, fs in os.walk("./examples"):
#   components = [i.replace(".py", "") for i in fs if i.endswith(".py")]

components = [
    "qrcode_usage",
    "particles_usage",
    "clock_usage",
    "lazyload_usage",
    "textfit_usage",
    "barcode_usage",
    "snake_usage",
    "weather_usage",
    "masonry_usage",
]


@pytest.mark.parametrize("component", components)
def test_render_components(dash_duo, component):
    app = import_app(f"examples.{component}")
    dash_duo.start_server(app)
