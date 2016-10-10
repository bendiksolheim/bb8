const bb8 = require('./bb8');
const myo = require('./myo');
const math = require('./math');

if (process.argv.length < 3) {
    console.log('Usage: node index.js {peripheral id}');
    process.exit(1);
}

const id = process.argv[2];

const gameData = {
    myoConnected: false,
    bb8Connected: false,
    direction: 0,
    speed: 0
};

myo.connect(data => {
    console.log('Connected to ', data.name);
    gameData.myoConnected = true;
    process.on('myo:oriencationchange', delta => gameData.direction = math.wrapDegrees(gameData.direction, delta));
    process.on('myo:speed', speed => gameData.speed = speed);
});

bb8.connect(id, () => {
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
        console.log('Direction:', gameData.direction, '\tSpeed:', gameData.speed);
        bb8.roll(data.speed, data.direction);
    }, 100);
}

startGame(gameData);
