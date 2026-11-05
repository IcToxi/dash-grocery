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


def test_textfit_grows_text_to_fill_container(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        dash_grocery.Textfit(
            html.Span("fit me", id="fit-text"),
            id="fit",
            mode="single",
            max=300,
            style={"width": "600px"},
        )
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#fit-text")
    WebDriverWait(dash_duo.driver, 10).until(
        lambda d: float(
            d.execute_script(
                "return parseFloat(getComputedStyle(document.getElementById('fit-text')).fontSize)"
            )
        )
        > 40
    )
    width = dash_duo.driver.execute_script(
        "return document.getElementById('fit-text').getBoundingClientRect().width"
    )
    assert width <= 600


def test_lazy_load_defers_offscreen_content(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        [
            html.Div(style={"height": "3000px"}),
            dash_grocery.LazyLoad(
                html.Div("loaded", id="lazy-child"), id="lazy", height=100, once=True
            ),
            html.Div(style={"height": "1000px"}),
        ]
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#lazy")
    assert not dash_duo.find_elements("#lazy-child")
    dash_duo.driver.execute_script(
        "document.getElementById('lazy').scrollIntoView()"
    )
    dash_duo.wait_for_element("#lazy-child")


def test_masonry_places_items_in_columns(dash_duo):
    app = Dash(__name__)
    heights = [100, 60, 80, 40, 90, 50]
    app.layout = html.Div(
        dash_grocery.Masonry(
            [
                html.Div(
                    id=f"m{i}",
                    style={"height": f"{h}px", "width": "100px", "background": "#ccc"},
                )
                for i, h in enumerate(heights)
            ],
            id="masonry",
            options={"columnWidth": 100, "gutter": 10},
        ),
        style={"width": "340px"},
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#m5")
    WebDriverWait(dash_duo.driver, 10).until(
        lambda d: d.execute_script(
            "return getComputedStyle(document.getElementById('m5')."
            "parentElement).visibility"
        )
        == "visible"
    )
    lefts = dash_duo.driver.execute_script(
        "return [0,1,2,3,4,5].map(i => document.getElementById('m'+i)."
        "parentElement.offsetLeft)"
    )
    # three columns of 100px with a 10px gutter
    assert lefts[:3] == [0, 110, 220]
    assert set(lefts) <= {0, 110, 220}


def test_particle_canvases_draw(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        [
            dash_grocery.ParticlesBg(id="bg", type="cobweb"),
            dash_grocery.MouseParticles(id="mouse"),
        ]
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element("canvas#bg")

    def has_pixels(driver):
        return driver.execute_script(
            "const c=document.getElementById('bg');"
            "const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;"
            "for(let i=3;i<d.length;i+=4){if(d[i]>0)return true}return false"
        )

    WebDriverWait(dash_duo.driver, 10).until(has_pixels)


def test_clock_shows_time_in_timezone(dash_duo):
    app = Dash(__name__)
    app.layout = dash_grocery.Clock(
        id="clock", date="2024-01-01T00:00:00Z", format="HH:mm", timezone="Asia/Tokyo"
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_text_to_equal("#clock", "09:00")


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
