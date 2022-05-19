import os, sys

sys.path.append(os.path.dirname(sys.path[0]))
import dash_grocery
from dash import html, Dash

app = Dash(__name__)

app.layout = html.Div(
    [
        dash_grocery.QRCodeCanvas(value="https://plotly.com/python/plotly-express/"),
        html.Br(),
        html.Br(),
        html.Br(),
        dash_grocery.QRCodeSVG(value="https://github.com/"),
    ]
)

if __name__ == "__main__":
    app.run_server(debug=True)
