import os, sys

sys.path.append(os.path.dirname(sys.path[0]))
import dash_grocery
from dash import html, dcc, Dash
import plotly.express as px

df = px.data.iris()
fig = px.scatter(df, x="sepal_width", y="sepal_length", color="species")

app = Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            [
                dash_grocery.LazyLoad(
                    html.Img(
                        src="https://hddesktopwallpapers.in/wp-content/uploads/2015/09/cat-eyes-cute.jpg",
                        height=300,
                    ),
                    throttle=200,
                    height=300,
                ),
                dash_grocery.LazyLoad(dcc.Graph(figure=fig), throttle=200, height=300),
            ]
        )
        for i in range(10)
    ],
)


if __name__ == "__main__":
    app.run(debug=True)
