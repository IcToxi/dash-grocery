# AUTO GENERATED FILE - DO NOT EDIT

export particlesbg

"""
    particlesbg(;kwargs...)

A ParticlesBg component.
Wrapped from [particles-bg](https://github.com/lindelof/particles-bg).
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `bg` (Bool | Dict | String; optional): Eliminate dom's className without triggering animation
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `color` (String | Array of Strings; optional): The background color or particle color of the particle scene
- `config` (optional): You can use type="custom" to achieve a higher degree of freedom for the particle background.. config has the following type: lists containing elements 'num', 'rps', 'radius', 'life', 'v', 'tha', 'body', 'rotate', 'alpha', 'scale', 'position', 'color', 'cross', 'random', 'g', 'f', 'func'.
Those elements have the following types:
  - `num` (Real | Array; optional)
  - `rps` (Real; optional)
  - `radius` (Real | Array; optional)
  - `life` (Real | Array; optional)
  - `v` (Real | Array; optional)
  - `tha` (Real | Array; optional)
  - `body` (String; optional)
  - `rotate` (Real | Array; optional)
  - `alpha` (Real | Array; optional)
  - `scale` (Real | Array; optional)
  - `position` (String; optional)
  - `color` (String | Array of Strings; optional)
  - `cross` (String; optional)
  - `random` (Real | Bool; optional)
  - `g` (Real; optional)
  - `f` (Real | Array; optional)
  - `func` (optional)
- `num` (Real; optional): The number of particles emitted each time, generally not set
- `type` (String; optional): The type of particle animation.
"color", "ball", "lines", "thick", "circle", "cobweb" ,"polygon", "square", "tadpole", "fountain", "random", "custom"
"""
function particlesbg(; kwargs...)
        available_props = Symbol[:id, :bg, :class_name, :color, :config, :num, :type]
        wild_props = Symbol[]
        return Component("particlesbg", "ParticlesBg", "dash_grocery", available_props, wild_props; kwargs...)
end

