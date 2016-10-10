const myo = require('myo');
const throttle = require('lodash/throttle');
const math = require('./math');

const change_factor = 5;
const roll_threshold = 0.2;

const speed_min = -1.0;
const speed_max = -0.25;

myo.on('orientation', (quaternion) => {
    var rollValue = math.roll(quaternion) * -1;
    if (rollValue >= -roll_threshold && rollValue <= roll_threshold) {
        rollValue = 0.0;
    }
    const rollFactor = math.clamp(rollValue, -1, 1);
    const rollDelta = Math.round(change_factor * rollFactor);
    process.emit('myo:oriencationchange', rollDelta);

    const speedValue = math.clamp(math.pitch(quaternion), speed_min, speed_max);
    const speed = math.mapInterval(speedValue, speed_min, speed_max, 0, 150);
    process.emit('myo:speed', speed);
});

function connect(connectedFn) {
    myo.on('connected', connectedFn);
    myo.connect('no.bekk.myo');
}

module.exports = {
    connect
};
