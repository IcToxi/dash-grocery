import os, sys

sys.path.append(os.path.dirname(sys.path[0]))
import dash_grocery
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    dash_grocery.Snake(color1="black", color2="tomato", backgroundColor="darkgrey")
)


if __name__ == "__main__":
    app.run_server(debug=True)
