const sphero = require('sphero');
const bb8 = sphero('e7d4b68ae0394a108cfc090f13e269d3');

// roll(speed, heading, state, callback);
// speed:
// heading: 0-359
// function connected() {
//     console.log('Connected');
//     bb8.color(0x00ff00);
//     bb8.roll(155, 0);
// }

// bb8.connect()
//     .then(connected);

// bb8.stopOnDisconnect((err, data) => {
//     if (err) {
//         console.log('Error stopping:', err);
//     } else {
//         console.log('Disconnected and stopped:', data);
//     }
// })

function connect(connectedFn) {
    bb8.connect().then(connectedFn);
}

module.exports = {
    connect,
    roll: bb8.roll
};
