// webpack.mix.js

let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js/app.js').sass('resources/scss/app.scss','public/css/app.css');
 

// mix.js('src/app.js', 'dist').setPublicPath('dist');

//we are just compiling the files js and scss under the resources directory
//after compilation we want to put them into the css and js directory under the public directory


//for doing this we have to add the scripts development, watch, production to the package.json file
//after that we can directly run the command 'yarn watch'
//if the command exits with the exit code 1 we need to reinstall the cross-env
//yarn add cross-env --save-dev
//now again run the command 'yarn watch'
//it will be built successfully

//now if we see the app.js in the public directory it would be populated with some code
//at line 11 we can see the bulit code from app.js of resources

//similarly we update the resources/scss/app.scss file
//the changes will be reflected in public/css/app.css file