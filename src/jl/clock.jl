# AUTO GENERATED FILE - DO NOT EDIT

export clock

"""
    clock(;kwargs...)
    clock(children::Any;kwargs...)
    clock(children_maker::Function;kwargs...)


A Clock component.
Wrapped from [react-live-clock](https://github.com/pvoznyuk/react-live-clock).
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): date can be set as a children prop.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `date` (String; optional): Date to output, If nothing is set then it take current date.
- `format` (String; optional): Formatting from moment.js library.
- `interval` (Real; optional): Auto-updating period for the clock. 1 second is a default value.
- `locale` (String; optional): Changes the language of the component via prop
- `ticking` (Bool; optional): If you want the clock to be auto-updated every interval seconds.
- `timezone` (String; optional): If timezone is set, the date is show in this timezone. 
You can find the list. here, the TZ column.
"""
function clock(; kwargs...)
        available_props = Symbol[:children, :id, :class_name, :date, :format, :interval, :locale, :ticking, :timezone]
        wild_props = Symbol[]
        return Component("clock", "Clock", "dash_grocery", available_props, wild_props; kwargs...)
end

clock(children::Any; kwargs...) = clock(;kwargs..., children = children)
clock(children_maker::Function; kwargs...) = clock(children_maker(); kwargs...)

