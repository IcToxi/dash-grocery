import os, sys

sys.path.append(os.path.dirname(sys.path[0]))
import dash_grocery
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    dash_grocery.ResponsiveGridLayout(
        [
            html.Div("Aa"),
            html.Div("Bb"),
        ],
    )
)


if __name__ == "__main__":
    app.run(debug=True)
