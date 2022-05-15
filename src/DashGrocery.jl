
module DashGrocery
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.2"

include("jl/barcode.jl")
include("jl/clock.jl")
include("jl/lazyload.jl")
include("jl/mouseparticles.jl")
include("jl/particlesbg.jl")
include("jl/powermodeinput.jl")
include("jl/qrcodecanvas.jl")
include("jl/qrcodesvg.jl")
include("jl/textfit.jl")
include("jl/weather.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_grocery",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_grocery.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_grocery.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
