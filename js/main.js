var crappyBird = require('./crappy_bird');

document.addEventListener('DOMContentLoaded', function() {
    var app = new crappyBird.CrappyBird();
    app.run();
});

