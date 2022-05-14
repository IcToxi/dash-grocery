# AUTO GENERATED FILE - DO NOT EDIT

export weather

"""
    weather(;kwargs...)

A Weather component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `api_key` (String; required): your api key from the openweather, weatherbit or visual crossing websites
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `customData` (Dict; optional)
- `lang` (String; optional): the language to show "humidity" and "wind speed", feel free to open a PR to lang.js to add more languages
"en", "de", "es"
- `lat` (Real | String; optional): latitude of the location
- `locationLabel` (String; optional): The name of the location or city to show in the component
- `lon` (Real | String; optional): longitude of the location
- `option` (String; optional): useOpenWeather, useWeatherBit and useVisualCrossing options
- `showForecast` (Bool; optional): whether or not to show the forecast bottom part of the component
- `theme` (optional): Custom styling. theme has the following type: lists containing elements 'fontFamily', 'gradientStart', 'gradientMid', 'gradientEnd', 'locationFontColor', 'todayTempFontColor', 'todayDateFontColor', 'todayRangeFontColor', 'todayDescFontColor', 'todayInfoFontColor', 'todayIconColor', 'forecastBackgroundColor', 'forecastSeparatorColor', 'forecastDateColor', 'forecastDescColor', 'forecastRangeColor', 'forecastIconColor'.
Those elements have the following types:
  - `fontFamily` (String; optional)
  - `gradientStart` (String; optional)
  - `gradientMid` (String; optional)
  - `gradientEnd` (String; optional)
  - `locationFontColor` (String; optional)
  - `todayTempFontColor` (String; optional)
  - `todayDateFontColor` (String; optional)
  - `todayRangeFontColor` (String; optional)
  - `todayDescFontColor` (String; optional)
  - `todayInfoFontColor` (String; optional)
  - `todayIconColor` (String; optional)
  - `forecastBackgroundColor` (String; optional)
  - `forecastSeparatorColor` (String; optional)
  - `forecastDateColor` (String; optional)
  - `forecastDescColor` (String; optional)
  - `forecastRangeColor` (String; optional)
  - `forecastIconColor` (String; optional)
- `unit` (String; optional): the unit will be passed to the openweather, weatherbit or visualcrossing "units" property, please check their documentation for more info
- `unitsLabels` (optional): the labels to be used for temprature and windspeed. unitsLabels has the following type: lists containing elements 'temperature', 'windSpeed'.
Those elements have the following types:
  - `temperature` (String; optional)
  - `windSpeed` (String; optional)
"""
function weather(; kwargs...)
        available_props = Symbol[:id, :api_key, :class_name, :customData, :lang, :lat, :locationLabel, :lon, :option, :showForecast, :theme, :unit, :unitsLabels]
        wild_props = Symbol[]
        return Component("weather", "Weather", "dash_grocery", available_props, wild_props; kwargs...)
end

