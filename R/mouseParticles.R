# AUTO GENERATED FILE - DO NOT EDIT

#' @export
mouseParticles <- function(id=NULL, alpha=NULL, class_name=NULL, color=NULL, cull=NULL, g=NULL, level=NULL, life=NULL, num=NULL, radius=NULL, tha=NULL, v=NULL) {
    
    props <- list(id=id, alpha=alpha, class_name=class_name, color=color, cull=cull, g=g, level=level, life=life, num=num, radius=radius, tha=tha, v=v)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MouseParticles',
        namespace = 'dash_grocery',
        propNames = c('id', 'alpha', 'class_name', 'color', 'cull', 'g', 'level', 'life', 'num', 'radius', 'tha', 'v'),
        package = 'dashGrocery'
        )

    structure(component, class = c('dash_component', 'list'))
}
