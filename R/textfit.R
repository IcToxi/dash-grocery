# AUTO GENERATED FILE - DO NOT EDIT

#' @export
textfit <- function(children=NULL, id=NULL, class_name=NULL, forceSingleModeWidth=NULL, max=NULL, min=NULL, mode=NULL, onReady=NULL, throttle=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, forceSingleModeWidth=forceSingleModeWidth, max=max, min=min, mode=mode, onReady=onReady, throttle=throttle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Textfit',
        namespace = 'dash_grocery',
        propNames = c('children', 'id', 'class_name', 'forceSingleModeWidth', 'max', 'min', 'mode', 'onReady', 'throttle'),
        package = 'dashGrocery'
        )

    structure(component, class = c('dash_component', 'list'))
}
