# AUTO GENERATED FILE - DO NOT EDIT

export textfit

"""
    textfit(;kwargs...)
    textfit(children::Any;kwargs...)
    textfit(children_maker::Function;kwargs...)


A Textfit component.
Wrapped from [react-textfit](https://github.com/malte-wessel/react-textfit).
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `forceSingleModeWidth` (Bool; optional): (Boolean) When mode is single and forceSingleModeWidth is true, the element's height will be ignored. 
Default is true.
- `max` (Real; optional): (Number) Maximum font size in pixel. Default is 100.
- `min` (Real; optional): (Number) Minimum font size in pixel. Default is 1.
- `mode` (String; optional): (single|multi) Algorithm to fit the text. Use single for headlines and multi for paragraphs.
Default is multi.
- `throttle` (Real; optional): (Number) Window resize throttle in milliseconds. Default is 50.
"""
function textfit(; kwargs...)
        available_props = Symbol[:children, :id, :class_name, :forceSingleModeWidth, :max, :min, :mode, :throttle]
        wild_props = Symbol[]
        return Component("textfit", "Textfit", "dash_grocery", available_props, wild_props; kwargs...)
end

textfit(children::Any; kwargs...) = textfit(;kwargs..., children = children)
textfit(children_maker::Function; kwargs...) = textfit(children_maker(); kwargs...)

