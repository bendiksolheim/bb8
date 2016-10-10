var noble = require('noble');

noble.on('stateChange', function(state) {
    if (state === 'poweredOn')
        noble.startScanning();
    else
        noble.stopScanning();
});

noble.on('discover', function(peripheral) {
    if (!peripheral.advertisement.localName.includes('BB-8'))
        return;

    console.log('BB-8 found:', peripheral.id);
});
