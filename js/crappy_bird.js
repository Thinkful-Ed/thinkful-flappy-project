var graphicsSystem = require('./systems/graphics_system');
var physicsSystem = require('./systems/physics_system');
var inputSystem = require('./systems/input_system');
var pipeSystem = require('./systems/pipe_system');

var bird = require('./entities/bird');
var settings = require('./settings');

var CrappyBird = function() {
    this.entities = [new bird.Bird()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities);
    this.input = new inputSystem.InputSystem(this.entities);
    this.pipes = new pipeSystem.PipeSystem(this.entities);
};

CrappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();
    this.pipes.run();
};

CrappyBird.prototype.pause = function() {
    this.graphics.pause();
    this.physics.pause();
    this.input.pause();
    this.pipes.pause();
};

exports.CrappyBird = CrappyBird;
