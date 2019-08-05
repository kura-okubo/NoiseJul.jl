# NoiseJul.jl
A Julia package of modules for seismological processing and analysis.

# Installation

From the Julia command prompt:

1. Press ] to enter pkg.
2. Type `add xxx/NoiseJul.jl`
3. Press backspace to exit pkg.
4. Type `using NoiseJul`

!!! note
      If you have an error when adding NoiseJul, try

> using Pkg; Pkg.pkg"add https://github.com/xtyangpsp/SeisConvert.jl.git https://github.com/kura-okubo/SeisDownload.jl.git https://github.com/jaredbryan881/SeisXcorrelation.jl.git https://github.com/kura-okubo/SeisRemoveEQ.jl.git https://github.com/kura-okubo/SeisBeamforming.git";

!!! note

      Since it imports large number of submodules, precompile process takes a minute.

# Modules

- [SeisIO](https://github.com/jpjones76/SeisIO.jl): Julia language support for geophysical time series data

   Author: [jpjones76](https://github.com/jpjones76)

- [SeisNoise](https://github.com/tclements/SeisNoise.jl): Ambient Noise Cross-Correlation in Julia

   Author: [Tim Clements](https://github.com/tclements/)

- [SeisDownload](https://github.com/kura-okubo/SeisDownload.jl.git): Mass download of Seismic data with SeisIO

   Author: [Kurama Okubo](https://github.com/kura-okubo)

- [SeisConvert](https://github.com/xtyangpsp/SeisConvert.jl): Data convertor from SAC format

   Author: [Xiaotao Yang](https://github.com/xtyangpsp)

- [SeisXcorrelation](https://github.com/jaredbryan881/SeisXcorrelation.jl.git) (under developing): High-order CC with SeisNoise

  Author: [Jared Bryan](https://github.com/jaredbryan881)

- [SeisRemoveEQ](https://github.com/kura-okubo/SeisRemoveEQ.jl.git): Removing earthquake and tremor from raw data using kurtosis & STA/LTA

   Author: [Kurama Okubo](https://github.com/kura-okubo)

- [SeisBeamforming](https://github.com/kura-okubo/SeisBeamforming.git): Compute Beampower for Beamforming analysis

   Author: [Kurama Okubo](https://github.com/kura-okubo)

# Documents

```@index
```

```@autodocs
Modules = [NoiseJul]
```

---
Copyright (c) 2019 Harvard University Earthquake Seismology Group. All Rights Reserved.
