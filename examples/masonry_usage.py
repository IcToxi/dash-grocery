import os, sys

sys.path.append(os.path.dirname(sys.path[0]))
import dash_grocery
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    dash_grocery.Masonry(
        [
            html.Div(
                html.Img(
                    src="https://hddesktopwallpapers.in/wp-content/uploads/2015/09/cat-eyes-cute.jpg",
                    height=300,
                )
            )
            for i in range(50)
        ],
    )
)


if __name__ == "__main__":
    app.run_server(debug=True)
