import dash_grocery
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dash_grocery.Particles(
            id="particles",
            style={"height": "300px", "background": "#111"},
            options={
                "fullScreen": {"enable": False},
                "particles": {
                    "number": {"value": 50},
                    "color": {"value": "#ffffff"},
                    "links": {"enable": True, "color": "#ffffff"},
                    "move": {"enable": True, "speed": 2},
                },
            },
        )
    ]
)

if __name__ == "__main__":
    app.run(debug=True)
