var settings = require("../settings");
var physicsComponent = require("../components/physics/physics");
var graphicsComponent = require("../components/graphics/pipe");
var collisionComponent = require("../components/collision/pipe");

var Pipe = function(position, size) {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position = position;
    physics.velocity.x = -settings.levelSpeed;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this, size);
    var collision = new collisionComponent.PipeCollisionComponent(this, size);

    this.components = {
        physics: physics,
        graphics: graphics,
        collision: collision
    }
};

exports.Pipe = Pipe;

