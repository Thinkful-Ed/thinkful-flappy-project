var physicsComponent = require("../components/physics/physics");
var graphicsComponent = require("../components/graphics/bird");
var collisionComponent = require("../components/collision/bird");
var settings = require("../settings");

var Bird = function() {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.5;
    physics.acceleration.y = settings.gravity;

    var graphics = new graphicsComponent.BirdGraphicsComponent(this);
    var collision = new collisionComponent.BirdCollisionComponent(this);

    this.components = {
        physics: physics,
        graphics: graphics,
        collision: collision
    };
};

exports.Bird = Bird;
