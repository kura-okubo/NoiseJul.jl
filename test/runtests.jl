using NoiseJul
using Test

@testset "NoiseJul.jl" begin
    # Write your own tests here.
    @test NoiseJul.IO.SeisData()
    @test NoiseJul.Noise.FFTData()
end
