% Auto-generated: do not edit by hand
\name{textfit}

\alias{textfit}

\title{Textfit component}

\description{
Wrapped from [react-textfit](https://github.com/malte-wessel/react-textfit).
}

\usage{
textfit(children=NULL, id=NULL, class_name=NULL,
forceSingleModeWidth=NULL, max=NULL, min=NULL, mode=NULL,
onReady=NULL, throttle=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{forceSingleModeWidth}{Logical. (Boolean) When mode is single and forceSingleModeWidth is true, the element's height will be ignored. 
Default is true.}

\item{max}{Numeric. (Number) Maximum font size in pixel. Default is 100.}

\item{min}{Numeric. (Number) Minimum font size in pixel. Default is 1.}

\item{mode}{Character. (single|multi) Algorithm to fit the text. Use single for headlines and multi for paragraphs.
Default is multi.}

\item{onReady}{(Function) Will be called when text is fitted.}

\item{throttle}{Numeric. (Number) Window resize throttle in milliseconds. Default is 50.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

