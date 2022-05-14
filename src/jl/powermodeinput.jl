# AUTO GENERATED FILE - DO NOT EDIT

export powermodeinput

"""
    powermodeinput(;kwargs...)

A PowerModeInput component.
Wrapped from [particles-bg](https://github.com/lindelof/particles-bg).
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `config` (optional): You can use type="custom" to achieve a higher degree of freedom for the particle background.. config has the following type: lists containing elements 'height', 'num', 'radius', 'tha', 'alpha', 'color', 'g', 'circle'.
Those elements have the following types:
  - `height` (Real; optional)
  - `num` (Real | Array; optional)
  - `radius` (Real | Array; optional)
  - `tha` (Real | Array; optional)
  - `alpha` (Real | Array; optional)
  - `color` (String | Array of Strings; optional)
  - `g` (Real; optional)
  - `circle` (Bool; optional)
- `defaultValue` (Bool | Real | String | Dict | Array; optional)
- `maxLength` (Real; optional)
- `placeholder` (String; optional)
- `style` (Dict; optional)
- `type` (String; optional)
- `value` (Bool | Real | String | Dict | Array; optional)
"""
function powermodeinput(; kwargs...)
        available_props = Symbol[:id, :class_name, :config, :defaultValue, :maxLength, :placeholder, :style, :type, :value]
        wild_props = Symbol[]
        return Component("powermodeinput", "PowerModeInput", "dash_grocery", available_props, wild_props; kwargs...)
end

