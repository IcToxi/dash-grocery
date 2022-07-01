import os, sys

sys.path.append(os.path.dirname(sys.path[0]))
import dash_grocery
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dash_grocery.Stars(count=5, color2="red", size=150, char="❤", edit=True),
        dash_grocery.Stars(count=5, value=3, size=150, char="☻", edit=False),
        dash_grocery.Stars(count=5, size=150, edit=True),
    ]
)


if __name__ == "__main__":
    app.run(debug=True)
