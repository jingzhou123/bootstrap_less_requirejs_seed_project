// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "scripts",
    "paths": {
        'jquery': '../../bower_components/jquery/dist/jquery',
        'ko': '../../bower_components/knockoutjs/dist/knockout'
    },
    "shim": {
    }
});

// Load the main app module to start the app
requirejs(["main"]);
