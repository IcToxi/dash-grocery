import pytest
import dash_grocery


COMPONENTS = [
    ("Barcode", {"value": "123456"}),
    ("Clock", {"format": "HH:mm:ss", "ticking": True}),
    ("LazyLoad", {"height": 100}),
    ("Masonry", {"options": {"columnWidth": 200}}),
    ("MouseParticles", {"num": 4}),
    ("ParticlesBg", {"type": "circle"}),
    ("PowerModeInput", {"value": "hello"}),
    ("QRCodeCanvas", {"value": "https://example.com"}),
    ("QRCodeSVG", {"value": "https://example.com"}),
    ("Snake", {"color1": "#000", "color2": "#f00"}),
    ("Stars", {"value": 3}),
    ("GridLayout", {"layout": [{"i": "a", "x": 0, "y": 0, "w": 2, "h": 2}]}),
    ("Particles", {"options": {"fpsLimit": 30}}),
    ("Textfit", {"mode": "single", "max": 400}),
    ("Weather", {"api_key": "test-key", "locationLabel": "Test"}),
    ("Weather", {"option": "custom", "customData": {"current": {}}}),
]


@pytest.mark.parametrize(("name", "props"), COMPONENTS)
def test_component_props_are_serialized(name, props):
    component = getattr(dash_grocery, name)(id="component", **props)
    serialized = component.to_plotly_json()

    assert serialized["type"] == name
    assert serialized["namespace"] == "dash_grocery"
    assert serialized["props"]["id"] == "component"
    assert {key: serialized["props"][key] for key in props} == props
