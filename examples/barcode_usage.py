import os, sys

sys.path.append(os.path.dirname(sys.path[0]))
import dash_grocery
from dash import html, dcc, Dash

app = Dash(__name__)

app.layout = html.Div(
    [
        dash_grocery.Barcode(value=5901234123457, format="EAN13", displayValue=True),
    ]
)

if __name__ == "__main__":
    app.run_server(debug=True)
