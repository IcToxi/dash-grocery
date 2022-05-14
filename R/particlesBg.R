# AUTO GENERATED FILE - DO NOT EDIT

#' @export
particlesBg <- function(id=NULL, bg=NULL, class_name=NULL, color=NULL, config=NULL, num=NULL, type=NULL) {
    
    props <- list(id=id, bg=bg, class_name=class_name, color=color, config=config, num=num, type=type)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ParticlesBg',
        namespace = 'dash_grocery',
        propNames = c('id', 'bg', 'class_name', 'color', 'config', 'num', 'type'),
        package = 'dashGrocery'
        )

    structure(component, class = c('dash_component', 'list'))
}
