const myo = require('myo');
const throttle = require('lodash/throttle');
const math = require('./math');

const changeFactor = 5;

myo.on('orientation', (quaternion) => {
    const rollValue = math.roll(quaternion);
    const rollFactor = math.clamp(rollValue, -1, 1);
    const rollDelta = Math.round(changeFactor * rollFactor);
    process.emit('myo:oriencationchange', rollDelta);

    const speedValue = math.clamp(math.pitch(quaternion) * -1, -0.5, .5);
    const speed = math.mapInterval(speedValue, -0.5, 0.5, 0, 150);
    process.emit('myo:speed', speed);
});

function connect(connectedFn) {
    myo.on('connected', connectedFn);
    myo.connect('no.bekk.myo');
}

module.exports = {
    connect
};
