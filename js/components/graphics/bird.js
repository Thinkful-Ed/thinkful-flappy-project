var settings = require("../../settings.js");

var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
    this.radius = settings.birdRadius;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
    context.save();
    context.translate(position.x, position.y);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;
