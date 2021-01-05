const hbs = require('hbs');
const moment = require('moment');

// Iteration 2: register partials
hbs.registerPartials(__dirname + '/../views/partials/');

// Iteration 2: register active helper for nav
hbs.registerHelper('active', (currentPath, hint, options) => {
    const args = options.hash;
    if (args.exact) {
        return currentPath === hint ? 'active' : '';
    } else {
        return currentPath.includes(hint) ? 'active' : '';
    }
});

// Iteration 3: register date helper for tweets
hbs.registerHelper('date', (date) => {
    return moment(date).startOf('minute').fromNow();
})