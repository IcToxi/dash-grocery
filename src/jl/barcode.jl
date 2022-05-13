# AUTO GENERATED FILE - DO NOT EDIT

export barcode

"""
    barcode(;kwargs...)

A Barcode component.
Wrapped from [react-barcode](https://github.com/kciter/react-barcode).
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `background` (String; optional): Set the background of the barcode.
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `displayValue` (Bool; optional)
- `flat` (String; optional): Only for EAN8/EAN13
- `font` (String; optional): Define the font used for the text in the generated barcode.
This can be any default font or a font defined by a @font-face rule.
- `fontOptions` (String; optional): With fontOptions you can add bold or italic text to the barcode.
- `fontSize` (Real; optional): Set the size of the text.
- `format` (String; optional): Select which barcode type to use. 
Please check the wikipage of the different barcode types for more information.
- `height` (Real; optional): The height of the barcode.
- `lineColor` (String; optional): Set the color of the bars and the text.
- `margin` (Real; optional): Set the space margin around the barcode. 
If nothing else is set, all side will inherit the margins property but can be replaced if you want to set them separably.
- `marginBottom` (Real; optional)
- `marginLeft` (Real; optional)
- `marginRight` (Real; optional)
- `marginTop` (Real; optional)
- `text` (String; optional): Overide the text that is diplayed
- `textAlign` (String; optional): Set the horizontal alignment of the text. Can be left / center / right.
- `textMargin` (Real; optional): Set the space between the barcode and the text.
- `textPosition` (String; optional): Set the vertical position of the text. Can be bottom / top.
- `value` (String | Real; optional)
- `width` (Real; optional): The width option is the width of a single bar.
"""
function barcode(; kwargs...)
        available_props = Symbol[:id, :background, :class_name, :displayValue, :flat, :font, :fontOptions, :fontSize, :format, :height, :lineColor, :margin, :marginBottom, :marginLeft, :marginRight, :marginTop, :text, :textAlign, :textMargin, :textPosition, :value, :width]
        wild_props = Symbol[]
        return Component("barcode", "Barcode", "dash_grocery", available_props, wild_props; kwargs...)
end

