# AUTO GENERATED FILE - DO NOT EDIT

#' @export
weather <- function(id=NULL, api_key=NULL, class_name=NULL, customData=NULL, func=NULL, lang=NULL, lat=NULL, locationLabel=NULL, lon=NULL, option=NULL, showForecast=NULL, theme=NULL, unit=NULL, unitsLabels=NULL) {
    
    props <- list(id=id, api_key=api_key, class_name=class_name, customData=customData, func=func, lang=lang, lat=lat, locationLabel=locationLabel, lon=lon, option=option, showForecast=showForecast, theme=theme, unit=unit, unitsLabels=unitsLabels)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Weather',
        namespace = 'dash_grocery',
        propNames = c('id', 'api_key', 'class_name', 'customData', 'func', 'lang', 'lat', 'locationLabel', 'lon', 'option', 'showForecast', 'theme', 'unit', 'unitsLabels'),
        package = 'dashGrocery'
        )

    structure(component, class = c('dash_component', 'list'))
}
