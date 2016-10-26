var noble = require('noble');

noble.on('stateChange', function(state) {
    if (state === 'poweredOn')
        noble.startScanning();
    else
        noble.stopScanning();
});

noble.on('discover', function(peripheral) {
    if (!peripheral || !peripheral.advertisement || !peripheral.advertisement.localName || !peripheral.advertisement.localName.includes('BB-8'))
        return;

    console.log('BB-8 found:', peripheral.advertisement.localName, peripheral.id);
});
