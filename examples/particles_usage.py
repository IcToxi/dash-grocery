import os, sys

sys.path.append(os.path.dirname(sys.path[0]))
import dash_grocery
from dash import html, Dash

app = Dash(__name__)

app.layout = html.Div(
    [
        dash_grocery.MouseParticles(),
        dash_grocery.ParticlesBg(),
        dash_grocery.PowerModeInput(
            style=dict(
                position="absolute",
                top="50%",
                left="50%",
                transform="translateX(-50%) translateY(-50%)",
            )
        ),
    ]
)

if __name__ == "__main__":
    app.run_server(debug=True)
