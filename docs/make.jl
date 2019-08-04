using Documenter, NoiseJul

makedocs(;
    modules=[NoiseJul],
    format=Documenter.HTML(),
    pages=[
        "Home" => "index.md",
    ],
    repo="https://github.com/kura-okubo/NoiseJul.jl/blob/{commit}{path}#L{line}",
    sitename="NoiseJul.jl",
    authors="NoiseJul",
    assets=String[],
)

deploydocs(;
    repo="github.com/kura-okubo/NoiseJul.jl",
)
