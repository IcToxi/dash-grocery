# AUTO GENERATED FILE - DO NOT EDIT

#' @export
barcode <- function(id=NULL, background=NULL, class_name=NULL, displayValue=NULL, flat=NULL, font=NULL, fontOptions=NULL, fontSize=NULL, format=NULL, height=NULL, lineColor=NULL, margin=NULL, marginBottom=NULL, marginLeft=NULL, marginRight=NULL, marginTop=NULL, text=NULL, textAlign=NULL, textMargin=NULL, textPosition=NULL, value=NULL, width=NULL) {
    
    props <- list(id=id, background=background, class_name=class_name, displayValue=displayValue, flat=flat, font=font, fontOptions=fontOptions, fontSize=fontSize, format=format, height=height, lineColor=lineColor, margin=margin, marginBottom=marginBottom, marginLeft=marginLeft, marginRight=marginRight, marginTop=marginTop, text=text, textAlign=textAlign, textMargin=textMargin, textPosition=textPosition, value=value, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Barcode',
        namespace = 'dash_grocery',
        propNames = c('id', 'background', 'class_name', 'displayValue', 'flat', 'font', 'fontOptions', 'fontSize', 'format', 'height', 'lineColor', 'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'text', 'textAlign', 'textMargin', 'textPosition', 'value', 'width'),
        package = 'dashGrocery'
        )

    structure(component, class = c('dash_component', 'list'))
}
