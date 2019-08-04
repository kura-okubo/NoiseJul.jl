__precompile__()

"""
# NoiseJul

A Julia module for seismological processing and analysis.
This module calls all submodules to perform seismological processing and analysis (data download, cross-correlation, noise monitoring etc.)
Each document can be found in their github repository.

- "IO" => "SeisIO",
- "Noise" => "SeisNoise",
- "Download" => "https://github.com/kura-okubo/SeisDownload",
- #currently NOT available "Xcorrelation" => "https://github.com/jaredbryan881/SeisXcorrelation.jl",
- "RemoveEQ" => "https://github.com/kura-okubo/SeisRemoveEQ.jl",
- "Beamforming" => "https://github.com/kura-okubo/SeisBeamforming.jl.git")

## example:
S = NoiseJul.IO.SeisData()

Copyright (c) 2019 Harvard University Earthquake Seismology Group. All Rights Reserved.
"""
module NoiseJul

module IO
using SeisIO
for n in names(SeisIO, all=true)
    if Base.isidentifier(n) && n ∉ (Symbol(SeisIO), :eval)
        eval(Expr(:export, n))
    end
end
end

module Noise
using SeisNoise
for n in names(SeisNoise, all=true)
    if Base.isidentifier(n) && n ∉ (Symbol(SeisNoise), :eval)
        eval(Expr(:export, n))
    end
end
end

module Download
using SeisDownload
for n in names(SeisDownload, all=true)
    if Base.isidentifier(n) && n ∉ (Symbol(SeisDownload), :eval)
        eval(Expr(:export, n))
    end
end
end

module RemoveEQ
using SeisRemoveEQ
for n in names(SeisRemoveEQ, all=true)
    if Base.isidentifier(n) && n ∉ (Symbol(SeisRemoveEQ), :eval)
        eval(Expr(:export, n))
    end
end
end

module Beamforming
using SeisBeamforming
for n in names(SeisBeamforming, all=true)
    if Base.isidentifier(n) && n ∉ (Symbol(SeisBeamforming), :eval)
        eval(Expr(:export, n))
    end
end
end


end # module
