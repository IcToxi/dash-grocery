# AUTO GENERATED FILE - DO NOT EDIT

export mouseparticles

"""
    mouseparticles(;kwargs...)

A MouseParticles component.
Wrapped from [react-mouse-particles](https://github.com/lindelof/react-mouse-particles).
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `alpha` (Real; optional): The alpha of every particle
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `color` (String | Array of Strings; optional): Particle color
- `cull` (String; optional): Eliminate dom's className without triggering animation
- `g` (Real; optional): Whether to add gravity
- `level` (Real; optional): Detect levels of culling animation
- `life` (Real; optional): The life of every particle
- `num` (Real; optional): The number of particles emitted each time
- `radius` (Real; optional): The radius of every particle
- `tha` (Real; optional): The Particle emitter angle
- `v` (Real; optional): The Particle emitter Particle velocity
"""
function mouseparticles(; kwargs...)
        available_props = Symbol[:id, :alpha, :class_name, :color, :cull, :g, :level, :life, :num, :radius, :tha, :v]
        wild_props = Symbol[]
        return Component("mouseparticles", "MouseParticles", "dash_grocery", available_props, wild_props; kwargs...)
end

