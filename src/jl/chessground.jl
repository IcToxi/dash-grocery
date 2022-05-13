# AUTO GENERATED FILE - DO NOT EDIT

export chessground

"""
    chessground(;kwargs...)

A Chessground component.
Wrapped from [react-lazyload](https://github.com/twobin/react-lazyload).
Lazyload your Components, Images or anything matters the performance.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `class_name` (String; optional): Often used with CSS to style elements with common properties
"""
function chessground(; kwargs...)
        available_props = Symbol[:id, :class_name]
        wild_props = Symbol[]
        return Component("chessground", "Chessground", "dash_grocery", available_props, wild_props; kwargs...)
end

