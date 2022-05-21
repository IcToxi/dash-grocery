import os, sys

sys.path.append(os.path.dirname(sys.path[0]))
import dash_grocery
from dash import Dash, Input, Output, State, html, dcc

app = Dash(__name__)

app.layout = html.Div(
    [
        dcc.Loading(
            dash_grocery.Weather(
                id="dw-1",
                api_key="00076c69fc34e8002e835ba96246288c",
                locationLabel="New York",
                lat=43,
                lon=75,
                lang="en",
                unit="metric",
                option="OpenWeather",
            )
        ),
        html.Br(),
        lat := dcc.Input(type="number"),
        lon := dcc.Input(type="number"),
        city := dcc.Input(),
        btn := html.Button("Update"),
    ]
)


app.callback(
    [Output("dw-1", "lat"), Output("dw-1", "lon"), Output("dw-1", "locationLabel")],
    Input(btn, "n_clicks"),
    [State(lat, "value"), State(lon, "value"), State(city, "value")],
    prevent_initial_call=True,
)(lambda n, lat, lon, city: [lat, lon, city])


if __name__ == "__main__":
    app.run(debug=True)
