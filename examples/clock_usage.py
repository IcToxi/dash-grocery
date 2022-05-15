import os, sys

sys.path.append(os.path.dirname(sys.path[0]))
import dash_grocery
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dash_grocery.Textfit(
            dash_grocery.Clock(format="dd, MMMM Mo, YY, HH:mm:ss", ticking=True),
            max=400,
            mode="single",
        )
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
