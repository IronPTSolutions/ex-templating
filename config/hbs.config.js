const hbs = require('hbs');
const moment = require('moment');

// Iteration 2: register partials
hbs.registerPartials('./views/partials');


// Iteration 2: register active helper for nav
hbs.registerHelper('active', (options) => {
    const {path, match} = options.hash; 
    return path === match ? 'active' : '';

    /*para entender mejor lo de arriba :
    hbs.registerHelper('active', (options =>{
        const parameters = options.hash;
        return parameters.path === parameters.match ? 'active' : '';
    })) */


});

// Iteration 3: register date helper for tweets
