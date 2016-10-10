const sphero = require('sphero');
// const bb8 = sphero('e7d4b68ae0394a108cfc090f13e269d3');

var bb8 = null;

function connect(id, connectedFn) {
    bb8 = sphero(id);
    bb8.connect()
        .then(connectedFn)
        .catch((e) => {
            console.log('Failed connecting to bb8 with id', id);
            console.log(e);
        });
}

function roll(speed, direction) {
    if (!bb8) {
        return;
    }

    bb8.roll(speed, direction);
}

module.exports = {
    connect,
    roll: roll
};
