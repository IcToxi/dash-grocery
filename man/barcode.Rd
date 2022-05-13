% Auto-generated: do not edit by hand
\name{barcode}

\alias{barcode}

\title{Barcode component}

\description{
Wrapped from [react-barcode](https://github.com/kciter/react-barcode).
}

\usage{
barcode(id=NULL, background=NULL, class_name=NULL,
displayValue=NULL, flat=NULL, font=NULL, fontOptions=NULL,
fontSize=NULL, format=NULL, height=NULL, lineColor=NULL,
margin=NULL, marginBottom=NULL, marginLeft=NULL,
marginRight=NULL, marginTop=NULL, text=NULL, textAlign=NULL,
textMargin=NULL, textPosition=NULL, value=NULL, width=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{background}{Character. Set the background of the barcode.}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{displayValue}{Logical. }

\item{flat}{Character. Only for EAN8/EAN13}

\item{font}{Character. Define the font used for the text in the generated barcode.
This can be any default font or a font defined by a @font-face rule.}

\item{fontOptions}{Character. With fontOptions you can add bold or italic text to the barcode.}

\item{fontSize}{Numeric. Set the size of the text.}

\item{format}{Character. Select which barcode type to use. 
Please check the wikipage of the different barcode types for more information.}

\item{height}{Numeric. The height of the barcode.}

\item{lineColor}{Character. Set the color of the bars and the text.}

\item{margin}{Numeric. Set the space margin around the barcode. 
If nothing else is set, all side will inherit the margins property but can be replaced if you want to set them separably.}

\item{marginBottom}{Numeric. }

\item{marginLeft}{Numeric. }

\item{marginRight}{Numeric. }

\item{marginTop}{Numeric. }

\item{text}{Character. Overide the text that is diplayed}

\item{textAlign}{Character. Set the horizontal alignment of the text. Can be left / center / right.}

\item{textMargin}{Numeric. Set the space between the barcode and the text.}

\item{textPosition}{Character. Set the vertical position of the text. Can be bottom / top.}

\item{value}{Character | numeric. }

\item{width}{Numeric. The width option is the width of a single bar.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

