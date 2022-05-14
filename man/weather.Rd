% Auto-generated: do not edit by hand
\name{weather}

\alias{weather}

\title{Weather component}

\description{
Wrapped from [react-open-weather](https://github.com/farahat80/react-open-weather).
}

\usage{
weather(id=NULL, api_key=NULL, class_name=NULL, customData=NULL,
func=NULL, lang=NULL, lat=NULL, locationLabel=NULL,
lon=NULL, option=NULL, showForecast=NULL, theme=NULL,
unit=NULL, unitsLabels=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{api_key}{Character. your api key from the openweather, weatherbit or visual crossing websites}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{customData}{Named list. }

\item{func}{}

\item{lang}{Character. the language to show "humidity" and "wind speed", feel free to open a PR to lang.js to add more languages
"en", "de", "es"}

\item{lat}{Numeric | character. latitude of the location}

\item{locationLabel}{Character. The name of the location or city to show in the component}

\item{lon}{Numeric | character. longitude of the location}

\item{option}{Character. useOpenWeather, useWeatherBit and useVisualCrossing options}

\item{showForecast}{Logical. whether or not to show the forecast bottom part of the component}

\item{theme}{Lists containing elements 'fontfamily', 'gradientstart', 'gradientmid', 'gradientend', 'locationfontcolor', 'todaytempfontcolor', 'todaydatefontcolor', 'todayrangefontcolor', 'todaydescfontcolor', 'todayinfofontcolor', 'todayiconcolor', 'forecastbackgroundcolor', 'forecastseparatorcolor', 'forecastdatecolor', 'forecastdesccolor', 'forecastrangecolor', 'forecasticoncolor'.
those elements have the following types:
  - fontfamily (character; optional)
  - gradientstart (character; optional)
  - gradientmid (character; optional)
  - gradientend (character; optional)
  - locationfontcolor (character; optional)
  - todaytempfontcolor (character; optional)
  - todaydatefontcolor (character; optional)
  - todayrangefontcolor (character; optional)
  - todaydescfontcolor (character; optional)
  - todayinfofontcolor (character; optional)
  - todayiconcolor (character; optional)
  - forecastbackgroundcolor (character; optional)
  - forecastseparatorcolor (character; optional)
  - forecastdatecolor (character; optional)
  - forecastdesccolor (character; optional)
  - forecastrangecolor (character; optional)
  - forecasticoncolor (character; optional). Custom styling}

\item{unit}{Character. the unit will be passed to the openweather, weatherbit or visualcrossing "units" property, please check their documentation for more info}

\item{unitsLabels}{Lists containing elements 'temperature', 'windspeed'.
those elements have the following types:
  - temperature (character; optional)
  - windspeed (character; optional). the labels to be used for temprature and windspeed}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

