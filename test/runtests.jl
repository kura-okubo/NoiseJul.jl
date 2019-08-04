using NoiseJul
using Test

@testset "NoiseJul.jl" begin
    # Write your own tests here.
    @test isempty(NoiseJul.IO.SeisData())
    @test isempty(NoiseJul.Noise.FFTData())
end
