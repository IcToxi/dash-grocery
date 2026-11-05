import dash_grocery
from dash import Dash

app = Dash(__name__)
app.layout = dash_grocery.Snake(
    id="snake",
    color1="black",
    color2="tomato",
    backgroundColor="darkgrey",
)

if __name__ == "__main__":
    app.run(debug=True)
