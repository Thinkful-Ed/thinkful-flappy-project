var settings = require('../settings.js');

var InputSystem = function(entities) {
    this.entities = entities;
    // Canvas is where we get input from
    this.canvas = document.getElementById('main-canvas');

    this.clickListener = null;
};

InputSystem.prototype.run = function() {
    this.clickListener = this.onClick.bind(this);
    this.canvas.addEventListener('click', this.clickListener);
};

InputSystem.prototype.pause = function() {
    this.canvas.removeEventListener('click', this.clickListener);
    this.clickListener = null;
};

InputSystem.prototype.onClick = function() {
    var bird = this.entities[0];
    bird.components.physics.velocity.y = settings.flapStrength;
};

exports.InputSystem = InputSystem;
