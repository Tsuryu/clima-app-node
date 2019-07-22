const axios = require('axios');

const getLugarLatLng = async dir => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/',
        headers: { 'X-RapidAPI-Key': 'd4e6319046mshcc800d71371e171p14d853jsn68eecf21d7c7' }
    });

    const resp = await instance.get(`/latlon.php?location=${encodedUrl}`);

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const { name: direccion, lat, lon: lng } = resp.data.Results[0];

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}