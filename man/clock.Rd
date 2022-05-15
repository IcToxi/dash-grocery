% Auto-generated: do not edit by hand
\name{clock}

\alias{clock}

\title{Clock component}

\description{
Wrapped from [react-live-clock](https://github.com/pvoznyuk/react-live-clock).
}

\usage{
clock(children=NULL, id=NULL, class_name=NULL, date=NULL,
filter=NULL, format=NULL, interval=NULL, locale=NULL,
onChange=NULL, ticking=NULL, timezone=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. date can be set as a children prop.}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{date}{Character. Date to output, If nothing is set then it take current date.}

\item{filter}{Filtering the value before the output .}

\item{format}{Character. Formatting from moment.js library.}

\item{interval}{Numeric. Auto-updating period for the clock. 1 second is a default value.}

\item{locale}{Character. Changes the language of the component via prop}

\item{onChange}{callback function on each output update}

\item{ticking}{Logical. If you want the clock to be auto-updated every interval seconds.}

\item{timezone}{Character. If timezone is set, the date is show in this timezone. 
You can find the list. here, the TZ column.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

