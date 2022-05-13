# AUTO GENERATED FILE - DO NOT EDIT

#' @export
qRCodeCanvas <- function(id=NULL, bgColor=NULL, class_name=NULL, fgColor=NULL, imageSettings=NULL, includeMargin=NULL, level=NULL, size=NULL, value=NULL) {
    
    props <- list(id=id, bgColor=bgColor, class_name=class_name, fgColor=fgColor, imageSettings=imageSettings, includeMargin=includeMargin, level=level, size=size, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'QRCodeCanvas',
        namespace = 'dash_grocery',
        propNames = c('id', 'bgColor', 'class_name', 'fgColor', 'imageSettings', 'includeMargin', 'level', 'size', 'value'),
        package = 'dashGrocery'
        )

    structure(component, class = c('dash_component', 'list'))
}
