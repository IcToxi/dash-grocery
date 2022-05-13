# AUTO GENERATED FILE - DO NOT EDIT

#' @export
lazyload <- function(children=NULL, id=NULL, classNamePrefix=NULL, class_name=NULL, debounce=NULL, height=NULL, offset=NULL, once=NULL, overflow=NULL, placeholder=NULL, resize=NULL, scroll=NULL, scrollContainer=NULL, style=NULL, throttle=NULL, unmountIfInvisible=NULL) {
    
    props <- list(children=children, id=id, classNamePrefix=classNamePrefix, class_name=class_name, debounce=debounce, height=height, offset=offset, once=once, overflow=overflow, placeholder=placeholder, resize=resize, scroll=scroll, scrollContainer=scrollContainer, style=style, throttle=throttle, unmountIfInvisible=unmountIfInvisible)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Lazyload',
        namespace = 'dash_grocery',
        propNames = c('children', 'id', 'classNamePrefix', 'class_name', 'debounce', 'height', 'offset', 'once', 'overflow', 'placeholder', 'resize', 'scroll', 'scrollContainer', 'style', 'throttle', 'unmountIfInvisible'),
        package = 'dashGrocery'
        )

    structure(component, class = c('dash_component', 'list'))
}
