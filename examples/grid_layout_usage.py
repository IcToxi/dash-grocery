import os, sys

sys.path.append(os.path.dirname(sys.path[0]))
import dash_grocery
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    dash_grocery.GridLayout(
        children=[
            html.Div("figure", key="l-x-fig"),
            html.Div("code", key="l-x-code"),
        ],
        layout=[
            {"i": "l-x-fig", "x": 0, "y": 0, "w": 6, "h": 3},
            {"i": "l-x-code", "x": 1, "y": 0, "w": 6, "h": 3},
        ],
    )
)


if __name__ == "__main__":
    app.run(debug=True)
