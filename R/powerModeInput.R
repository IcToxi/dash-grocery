# AUTO GENERATED FILE - DO NOT EDIT

#' @export
powerModeInput <- function(id=NULL, class_name=NULL, config=NULL, defaultValue=NULL, maxLength=NULL, placeholder=NULL, style=NULL, type=NULL, value=NULL) {
    
    props <- list(id=id, class_name=class_name, config=config, defaultValue=defaultValue, maxLength=maxLength, placeholder=placeholder, style=style, type=type, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PowerModeInput',
        namespace = 'dash_grocery',
        propNames = c('id', 'class_name', 'config', 'defaultValue', 'maxLength', 'placeholder', 'style', 'type', 'value'),
        package = 'dashGrocery'
        )

    structure(component, class = c('dash_component', 'list'))
}
