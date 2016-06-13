// BB8: 3a61cbc9fc5d4cefaa845d4e57a91272
const sphero = require('sphero');
const bb8 = sphero('3a61cbc9fc5d4cefaa845d4e57a91272');

function connected() {
    console.log('Connected');
    bb8.color("green");
    bb8.roll(155, 0);
}

bb8.connect()
    .then(connected);
