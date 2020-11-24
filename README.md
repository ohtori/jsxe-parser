<h1>JSX(e) Parser</h1>

<h2>ATTENTION! </h2>
<p>this is a pet-project, don't try use that in production and even not recommend in dev.
Not support all real jsx parser features (you can read about in notSupportingFeatures.txt file). Maybe have unexpected bugs.</p>

<h2>About</h2>
<p>This app parse files with ".jsxe" extension from directory 'src' and puts them in "dist" folder with changing extension to ".js". 
"jsxe" files contains jsx like code. After parsing, in "dist" directory, we have correct js files without jsx like code (Like after @babel --preset-react parsing).</p>

<h2>Use</h2>
for use tap "npm run parse" or "node index"
In "src" and "dist" directory exist example files.
