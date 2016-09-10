const myo = require('myo');
const throttle = require('lodash/throttle');
const math = require('./math');

const changeFactor = 5;

myo.on('orientation', (quaternion) => {
    const rollValue = math.roll(quaternion);
    const rollFactor = math.clamp(rollValue);
    const delta = Math.round(changeFactor * rollFactor);
    process.emit('myo:oriencationchange', delta);
});

function connect(connectedFn) {
    myo.on('connected', connectedFn);
    myo.connect('no.bekk.myo');
}

module.exports = {
    connect
};
