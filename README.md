#JSX(e) Parser

##ATTENTION! 
this is a pet-project, don't try use that in production and even not recommend in dev.
Not support all real jsx parser features (you can read about in notSupportingFeatures.txt file). Maybe have unexpected bugs.

##About
This app parse files with ".jsxe" extension from directory 'src' and puts them in "dist" folder with changing extension to ".js". 
"jsxe" files contains jsx like code. After parsing, in "dist" directory, we have correct js files without jsx like code (Like after @babel --preset-react parsing).

##Use
for use tap "npm run parse" or "node index"
In "src" and "dist" directory exist example files.