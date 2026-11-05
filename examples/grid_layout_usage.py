import dash_grocery
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dash_grocery.GridLayout(
            id="grid",
            layout=[
                {"i": "a", "x": 0, "y": 0, "w": 4, "h": 3},
                {"i": "b", "x": 4, "y": 0, "w": 4, "h": 3},
            ],
            children=[
                html.Div("Item A", style={"background": "#cde"}),
                html.Div("Item B", style={"background": "#dec"}),
            ],
        )
    ]
)

if __name__ == "__main__":
    app.run(debug=True)
