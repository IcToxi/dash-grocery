# Dash Grocery

Dash Grocery is a collection of Dash components that wrap useful React
libraries.

## Install

```bash
pip install dash-grocery
```

Dash Grocery requires Dash 4.5.0 or later.

## Quickstart

```python
from dash import Dash, html
import dash_grocery

app = Dash(__name__)

app.layout = html.Div(
    [
        dash_grocery.Clock(
            format="dddd, MMMM Do, YYYY, HH:mm:ss",
            ticking=True,
        ),
        dash_grocery.Barcode(value="dash-grocery", format="CODE128"),
        dash_grocery.QRCodeSVG(value="https://github.com/IcToxi/dash-grocery"),
    ]
)

if __name__ == "__main__":
    app.run(debug=True)
```

## Components

| Component | Wraps |
| --- | --- |
| `Barcode` | [react-barcode](https://github.com/kciter/react-barcode) |
| `Clock` | Local implementation (no third-party library) |
| `GridLayout` | [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout) |
| `LazyLoad` | Local implementation (no third-party library) |
| `Masonry` | Local implementation (no third-party library) |
| `MouseParticles` | Local implementation (no third-party library) |
| `Particles` | [tsParticles](https://github.com/tsparticles/tsparticles) (slim bundle) |
| `ParticlesBg` | Local implementation (no third-party library) |
| `PowerModeInput` | Local implementation (no third-party library) |
| `QRCodeCanvas`, `QRCodeSVG` | [qrcode.react](https://github.com/zpao/qrcode.react) |
| `Snake` | Built-in; keyboard and on-screen controls |
| `Stars` | Local implementation (replaces unmaintained react-stars) |
| `Textfit` | Local implementation (no third-party library) |
| `Weather` | [react-open-weather](https://github.com/farahat80/react-open-weather) |

Components accept their documented React properties as Dash properties. Use
`id` to reference a component in callbacks; interactive components such as
`Stars` and `PowerModeInput` expose their current value as a Dash property.
See the [examples](./examples/) for usage, and each component's `propTypes`
in [`src/lib/components`](./src/lib/components/) for supported properties.

`Weather` requires an API key from the selected weather provider. A key used in
a browser is visible to users; restrict it with the provider and set usage
limits. To use your own data, set `option="custom"` and pass `customData` in
the format returned by the selected provider. A custom JavaScript `func`, when
used outside Dash's JSON-based Python interface, receives the component props
and returns `{data, isLoading, errorMessage}`.

## Run an example

After installing the package, run an example from the repository root:

```bash
python -m examples.barcode_usage
```

## Development

Install the JavaScript and Python development dependencies, then build the
JavaScript bundle and generated Dash components. The project is tested with
Python 3.15, Node.js 22, and Dash's experimental React 19.2.4 runtime:

```bash
YARN_NODE_LINKER=node-modules yarn
python -m pip install -r requirements.txt
YARN_NODE_LINKER=node-modules yarn lint
YARN_NODE_LINKER=node-modules yarn build
pytest tests
```

Run `YARN_NODE_LINKER=node-modules yarn start` to rebuild the development
bundle whenever a source file changes.

To contribute a component, add its React wrapper under
`src/lib/components/`, export it from `src/lib/index.js`, and add an example
under `examples/`. `yarn build:py_and_r` also generates R wrappers and requires
an author email in `package.json`.

## Publishing to PyPI

This repository publishes distributions through GitHub Actions Trusted
Publishing; no PyPI API token is needed. Before the first release, add a
publisher under **PyPI account settings → Publishing** with:

- PyPI project: `dash-grocery`
- Owner: `IcToxi`
- Repository: `dash-grocery`
- Workflow: `publish-to-pypi.yml`
- Environment: `pypi`

A release is published when a tag such as `v0.1.2` matching the version in
`package.json` is pushed. The publishing workflow builds and tests the package
before uploading it to PyPI. It can also be started manually
(`workflow_dispatch`) for an existing tag.

### Automation

The repository maintains itself:

- **CI** runs on every push and pull request, and weekly to catch upstream
  breakage (Dash, React, browsers).
- **Dependabot** is limited to security updates; passing minor/patch ones are
  merged automatically (`dependabot-automerge.yml`). Releases are cut by hand
  (or via `auto-release.yml`), and only when needed for security fixes.
- **Auto release** (`auto-release.yml`) is manual-only (Actions tab, "Run
  workflow"). It bumps the patch version if `main` has dependency or source
  changes since the last tag and CI passed, then tags, creates the GitHub
  release and publishes to PyPI. Re-add a `schedule` trigger to run it weekly.

## Not included

[React Bits](https://reactbits.dev) and [Hover.dev](https://www.hover.dev) are
not bundled: they are copy-paste source collections whose licenses restrict
redistribution of components inside another package.
