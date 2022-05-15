# AUTO GENERATED FILE - DO NOT EDIT

#' @export
clock <- function(children=NULL, id=NULL, class_name=NULL, date=NULL, filter=NULL, format=NULL, interval=NULL, locale=NULL, onChange=NULL, ticking=NULL, timezone=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, date=date, filter=filter, format=format, interval=interval, locale=locale, onChange=onChange, ticking=ticking, timezone=timezone)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Clock',
        namespace = 'dash_grocery',
        propNames = c('children', 'id', 'class_name', 'date', 'filter', 'format', 'interval', 'locale', 'onChange', 'ticking', 'timezone'),
        package = 'dashGrocery'
        )

    structure(component, class = c('dash_component', 'list'))
}
