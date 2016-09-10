// BB8: 3a61cbc9fc5d4cefaa845d4e57a91272
const bb8 = require('./bb8');
const myo = require('./myo');

const gameData = {
    myoConnected: false,
    bb8Connected: false,
    direction: 0,
    speed: 50
};

myo.connect(data => {
    console.log('Connected to ', data.name);
    gameData.myoConnected = true;
    process.on('myo:oriencationchange', change => gameData.direction = (gameData.direction + change) % 359);
});

bb8.connect(() => {
    console.log('Connectedo to BB8');
    gameData.bb8Connected = true;
});

function isConnected(data) {
    return data.myoConnected && data.bb8Connected;
}

function startGame(data) {
    setInterval(() => {
        if (!isConnected(data)) {
            return;
        }
        console.log(gameData.direction);
        bb8.roll(data.speed, data.direction);
    }, 100);
}

startGame(gameData);
