const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el c lima',
        demand: true
    }
}).argv;

const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

//getLugarLatLng(argv.direccion)
//    .then(console.log);

//getClima('40.750000', '-74.000000')
//    .then(console.log)
//    .catch(console.log);

const getInfo = async direccion => {
    /*const lugar = await getLugarLatLng(argv.direccion)
        .catch(() => {
            throw new Error(`No se pudo determinar el clima de ${direccion}`)
        });

    const clima = await getClima(lugar.lat, lugar.lng)
        .catch(() => {
            throw new Error(`No se pudo determinar el clima de ${direccion}`)
        });*/

    //return `El clima de ${direccion} es de ${clima}`;

    try {
        const lugar = await getLugarLatLng(direccion);
        const clima = await getClima(lugar.lat, lugar.lng);
        return `El clima de ${direccion} es de ${clima}`;
    } catch (err) {
        throw new Error(`No se pudo determinar el clima de ${direccion}`)
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);