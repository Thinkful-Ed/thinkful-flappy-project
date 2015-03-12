var settings = require('../../settings');
var collisionComponent = require('./circle');

var BirdCollisionComponent = function(entity) {
    collisionComponent.CircleCollisionComponent.call(this, entity, settings.birdRadius);
};

BirdCollisionComponent.prototype = Object.create(
    collisionComponent.CircleCollisionComponent.prototype
);

BirdCollisionComponent.prototype.onCollision = function(object) {
    console.log("Crash");
};

exports.BirdCollisionComponent = BirdCollisionComponent;
