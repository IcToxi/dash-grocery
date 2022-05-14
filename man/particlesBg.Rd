% Auto-generated: do not edit by hand
\name{particlesBg}

\alias{particlesBg}

\title{ParticlesBg component}

\description{
Wrapped from [particles-bg](https://github.com/lindelof/particles-bg).
}

\usage{
particlesBg(id=NULL, bg=NULL, class_name=NULL, color=NULL, config=NULL,
num=NULL, type=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{bg}{Logical | named list | character. Eliminate dom's className without triggering animation}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{color}{Character | list of characters. The background color or particle color of the particle scene}

\item{config}{Lists containing elements 'num', 'rps', 'radius', 'life', 'v', 'tha', 'body', 'rotate', 'alpha', 'scale', 'position', 'color', 'cross', 'random', 'g', 'f', 'func'.
those elements have the following types:
  - num (numeric | unnamed list; optional)
  - rps (numeric; optional)
  - radius (numeric | unnamed list; optional)
  - life (numeric | unnamed list; optional)
  - v (numeric | unnamed list; optional)
  - tha (numeric | unnamed list; optional)
  - body (character; optional)
  - rotate (numeric | unnamed list; optional)
  - alpha (numeric | unnamed list; optional)
  - scale (numeric | unnamed list; optional)
  - position (character; optional)
  - color (character | list of characters; optional)
  - cross (character; optional)
  - random (numeric | logical; optional)
  - g (numeric; optional)
  - f (numeric | unnamed list; optional)
  - func (optional). You can use type="custom" to achieve a higher degree of freedom for the particle background.}

\item{num}{Numeric. The number of particles emitted each time, generally not set}

\item{type}{Character. The type of particle animation.
"color", "ball", "lines", "thick", "circle", "cobweb" ,"polygon", "square", "tadpole", "fountain", "random", "custom"}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

