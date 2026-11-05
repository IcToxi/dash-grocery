import re

import dash_grocery
import examples
import pytest
import pkgutil
from dash import Dash, Input, Output, html
from dash.testing.application_runners import import_app
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait


components = [
    n for f, n, i in pkgutil.iter_modules(examples.__path__, examples.__name__ + ".")
]


@pytest.mark.parametrize("component", components)
def test_render_components(dash_duo, component):
    app = import_app(component)
    dash_duo.start_server(app)


def test_representative_components_render(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        [
            dash_grocery.QRCodeSVG(id="qr-code", value="https://example.com"),
            dash_grocery.Barcode(id="barcode", value="123456"),
            dash_grocery.Clock(id="clock", format="HH:mm:ss", ticking=False),
            dash_grocery.PowerModeInput(id="power-mode", value=""),
            dash_grocery.Snake(id="snake"),
        ]
    )

    dash_duo.start_server(app)

    for component_id in ("qr-code", "barcode", "power-mode", "snake-board"):
        dash_duo.wait_for_element(f"#{component_id}")

    WebDriverWait(dash_duo.driver, 10).until(
        lambda driver: re.search(
            r"\d{2}:\d{2}:\d{2}", driver.find_element(By.TAG_NAME, "body").text
        )
    )

    assert dash_duo.find_element("#snake-start").text == "Start"


def test_snake_controls_and_styles_are_scoped(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        [
            dash_grocery.Snake(id="snake"),
            html.Button("Unrelated button", id="unrelated-button"),
        ]
    )

    dash_duo.start_server(app)
    dash_duo.find_element("#snake-start").click()
    dash_duo.wait_for_element("#snake-pause")

    unrelated_margin = dash_duo.driver.execute_script(
        "return getComputedStyle(document.getElementById('unrelated-button')).marginTop"
    )
    assert unrelated_margin != "20px"

    dash_duo.find_element("#snake-board").send_keys(Keys.ARROW_DOWN)


def test_grid_layout_renders_dash_children(dash_duo):
    app = Dash(__name__)
    app.layout = dash_grocery.GridLayout(
        id="grid",
        layout=[
            {"i": "a", "x": 0, "y": 0, "w": 4, "h": 2},
            {"i": "b", "x": 4, "y": 0, "w": 4, "h": 2},
        ],
        children=[html.Div("Item A", id="a"), html.Div("Item B", id="b")],
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#grid .react-grid-item #a")
    assert len(dash_duo.find_elements("#grid .react-grid-item")) == 2


def test_tsparticles_draws_canvas(dash_duo):
    app = Dash(__name__)
    app.layout = dash_grocery.Particles(id="particles", style={"height": "200px"})

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#particles canvas")


def test_stars_click_updates_dash_value(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        [dash_grocery.Stars(id="stars", value=1, half=False), html.Div(id="out")]
    )

    @app.callback(Output("out", "children"), Input("stars", "value"))
    def show(value):
        return f"rating={value}"

    dash_duo.start_server(app)
    dash_duo.wait_for_text_to_equal("#out", "rating=1")
    dash_duo.find_elements("#stars span[data-index]")[3].click()
    dash_duo.wait_for_text_to_equal("#out", "rating=4")


def test_custom_weather_provider_renders(dash_duo):
    app = Dash(__name__)
    app.layout = dash_grocery.Weather(
        id="weather",
        option="custom",
        locationLabel="Test City",
        customData={
            "forecast": [],
            "current": {
                "date": "Today",
                "description": "Clear",
                "icon": "M0 0",
                "temperature": {"current": "20", "min": 18, "max": 22},
                "wind": "2",
                "humidity": 50,
            },
        },
    )

    dash_duo.start_server(app)

    WebDriverWait(dash_duo.driver, 10).until(
        lambda driver: "Test City" in driver.find_element(By.TAG_NAME, "body").text
    )


def test_power_mode_input_updates_dash_value(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        [
            dash_grocery.PowerModeInput(id="power-mode"),
            html.Div(id="power-mode-output"),
        ]
    )

    @app.callback(
        Output("power-mode-output", "children"),
        Input("power-mode", "value"),
    )
    def show_value(value):
        return value

    dash_duo.start_server(app)
    dash_duo.find_element("#power-mode").send_keys("test")

    dash_duo.wait_for_text_to_equal("#power-mode-output", "test")
