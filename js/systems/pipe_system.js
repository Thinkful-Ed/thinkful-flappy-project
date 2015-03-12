var settings = require('../settings');
var pipe = require('../entities/pipe');

var PipeSystem = function(entities) {
    this.entities = entities;
    this.canvas = document.getElementById('main-canvas');
    this.interval = null;
};

PipeSystem.prototype.run = function() {
    // Run the pipe creation interval
    this.interval = window.setInterval(this.tick.bind(this),
                                       1000 * settings.pipeFrequency);
};

PipeSystem.prototype.pause = function() {
    // Stop the update loop
    if (this.interval != null) {
        window.clearInterval(this.interval);
        this.interval = null;
    }
};

PipeSystem.prototype.tick = function() {
    var right = 0.5 * this.canvas.width / this.canvas.height;
    var gapPosition = 0.4 + Math.random() * 0.2;

    var height = gapPosition - settings.pipeGap / 2;
    var position = {
        x: right + settings.pipeWidth / 2,
        y: height / 2
    };

    var size = {
        x: settings.pipeWidth,
        y: height
    };

    this.entities.push(new pipe.Pipe(position, size));

    var height = 1 - gapPosition - settings.pipeGap / 2;
    var position = {
        x: right + settings.pipeWidth / 2,
        y: 1 - height / 2
    };

    var size = {
        x: settings.pipeWidth,
        y: height
    };
    this.entities.push(new pipe.Pipe(position, size));
};

exports.PipeSystem = PipeSystem;
