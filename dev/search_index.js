var documenterSearchIndex = {"docs":
[{"location":"#NoiseJul.jl-1","page":"Home","title":"NoiseJul.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A Julia package of modules for seismological processing and analysis.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"From the Julia command prompt:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Press ] to enter pkg.\nType add xxx/NoiseJul.jl\nPress backspace to exit pkg.\nType using NoiseJul","category":"page"},{"location":"#","page":"Home","title":"Home","text":"note: Note\nSince it imports large number of submodules, precompile process takes a minute.","category":"page"},{"location":"#Modules-1","page":"Home","title":"Modules","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"SeisIO: Julia language support for geophysical time series data\nAuthor: jpjones76\nSeisNoise: Ambient Noise Cross-Correlation in Julia\nAuthor: Tim Clements\nSeisDownload: Mass download of Seismic data with SeisIO\nAuthor: Kurama Okubo\nSeisConvert: Data convertor from SAC format\nAuthor: Xiaotao Yang\nSeisXcorrelation (under developing): High-order CC with SeisNoise\nAuthor: Jared Bryan\nSeisRemoveEQ: Removing earthquake and tremor from raw data using kurtosis & STA/LTA\nAuthor: Kurama Okubo\nSeisBeamforming: Compute Beampower for Beamforming analysis\nAuthor: Kurama Okubo","category":"page"},{"location":"#Documents-1","page":"Home","title":"Documents","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [NoiseJul]","category":"page"},{"location":"#NoiseJul.NoiseJul","page":"Home","title":"NoiseJul.NoiseJul","text":"NoiseJul\n\nA Julia module for seismological processing and analysis. This module calls all submodules to perform seismological processing and analysis (data download, cross-correlation, noise monitoring etc.) Each document can be found in their github repository.\n\n\"IO\" => \"SeisIO\",\n\"Noise\" => \"SeisNoise\",\n\"Download\" => \"https://github.com/kura-okubo/SeisDownload\",\n\"Convert\" => \"https://github.com/xtyangpsp/SeisConvert.jl.git\",\n#currently NOT available \"Xcorrelation\" => \"https://github.com/jaredbryan881/SeisXcorrelation.jl\",\n\"RemoveEQ\" => \"https://github.com/kura-okubo/SeisRemoveEQ.jl\",\n\"Beamforming\" => \"https://github.com/kura-okubo/SeisBeamforming.jl.git\")\n\nexample:\n\nS = NoiseJul.IO.SeisData()\n\nCopyright (c) 2019 Harvard University Earthquake Seismology Group. All Rights Reserved.\n\n\n\n\n\n","category":"module"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Copyright (c) 2019 Harvard University Earthquake Seismology Group. All Rights Reserved.","category":"page"}]
}
