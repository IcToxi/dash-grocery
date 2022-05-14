# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Weather(Component):
    """A Weather component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- api_key (string; required):
    your api key from the openweather, weatherbit or visual crossing
    websites.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- customData (dict; optional)

- lang (string; default 'en'):
    the language to show \"humidity\" and \"wind speed\", feel free to
    open a PR to lang.js to add more languages \"en\", \"de\", \"es\".

- lat (number | string; default '48.137154'):
    latitude of the location.

- locationLabel (string; default 'Munich'):
    The name of the location or city to show in the component.

- lon (number | string; default '11.576124'):
    longitude of the location.

- option (string; default 'OpenWeather'):
    useOpenWeather, useWeatherBit and useVisualCrossing options.

- showForecast (boolean; default True):
    whether or not to show the forecast bottom part of the component.

- theme (dict; default {    fontFamily: 'Helvetica, sans-serif',    gradientStart: '#0181C2',    gradientMid: '#04A7F9',    gradientEnd: '#4BC4F7',    locationFontColor: '#FFF',    todayTempFontColor: '#FFF',    todayDateFontColor: '#B5DEF4',    todayRangeFontColor: '#B5DEF4',    todayDescFontColor: '#B5DEF4',    todayInfoFontColor: '#B5DEF4',    todayIconColor: '#FFF',    forecastBackgroundColor: '#FFF',    forecastSeparatorColor: '#DDD',    forecastDateColor: '#777',    forecastDescColor: '#777',    forecastRangeColor: '#777',    forecastIconColor: '#4BC4F7',}):
    Custom styling.

    `theme` is a dict with keys:

    - fontFamily (string; optional)

    - forecastBackgroundColor (string; optional)

    - forecastDateColor (string; optional)

    - forecastDescColor (string; optional)

    - forecastIconColor (string; optional)

    - forecastRangeColor (string; optional)

    - forecastSeparatorColor (string; optional)

    - gradientEnd (string; optional)

    - gradientMid (string; optional)

    - gradientStart (string; optional)

    - locationFontColor (string; optional)

    - todayDateFontColor (string; optional)

    - todayDescFontColor (string; optional)

    - todayIconColor (string; optional)

    - todayInfoFontColor (string; optional)

    - todayRangeFontColor (string; optional)

    - todayTempFontColor (string; optional)

- unit (string; default 'metric'):
    the unit will be passed to the openweather, weatherbit or
    visualcrossing \"units\" property, please check their
    documentation for more info.

- unitsLabels (dict; default { temperature: 'C', windSpeed: 'Km/h' }):
    the labels to be used for temprature and windspeed.

    `unitsLabels` is a dict with keys:

    - temperature (string; optional)

    - windSpeed (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, class_name=Component.UNDEFINED, api_key=Component.REQUIRED, lat=Component.UNDEFINED, lon=Component.UNDEFINED, lang=Component.UNDEFINED, unit=Component.UNDEFINED, locationLabel=Component.UNDEFINED, unitsLabels=Component.UNDEFINED, showForecast=Component.UNDEFINED, option=Component.UNDEFINED, theme=Component.UNDEFINED, customData=Component.UNDEFINED, func=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'api_key', 'class_name', 'customData', 'lang', 'lat', 'locationLabel', 'lon', 'option', 'showForecast', 'theme', 'unit', 'unitsLabels']
        self._type = 'Weather'
        self._namespace = 'dash_grocery'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'api_key', 'class_name', 'customData', 'lang', 'lat', 'locationLabel', 'lon', 'option', 'showForecast', 'theme', 'unit', 'unitsLabels']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['api_key']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Weather, self).__init__(**args)
