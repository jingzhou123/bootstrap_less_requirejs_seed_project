// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
var requirejs = {
    "baseUrl": "scripts",
    "paths": {
        'jquery': '../../bower_components/jquery/jquery'
    },
    "shim": {
    }
};

// Load the main app module to start the app
//requirejs(["main"]);
