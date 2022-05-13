# AUTO GENERATED FILE - DO NOT EDIT

export qrcodecanvas

"""
    qrcodecanvas(;kwargs...)

A QRCodeCanvas component.
Wrapped from [qrcode.react](https://github.com/zpao/qrcode.react).
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `bgColor` (String; optional): "#FFFFFF"
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `fgColor` (String; optional): "#000000"
- `imageSettings` (optional): . imageSettings has the following type: lists containing elements 'src', 'x', 'y', 'height', 'width', 'excavate'.
Those elements have the following types:
  - `src` (String; optional)
  - `x` (Real; optional): none, will center
  - `y` (Real; optional): none, will center
  - `height` (Real; optional)
  - `width` (Real; optional)
  - `excavate` (Bool; optional)
- `includeMargin` (Bool; optional)
- `level` (String; optional): ('L' 'M' 'Q' 'H')
- `size` (Real; optional)
- `value` (String; optional)
"""
function qrcodecanvas(; kwargs...)
        available_props = Symbol[:id, :bgColor, :class_name, :fgColor, :imageSettings, :includeMargin, :level, :size, :value]
        wild_props = Symbol[]
        return Component("qrcodecanvas", "QRCodeCanvas", "dash_grocery", available_props, wild_props; kwargs...)
end

