// api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=aaa87cc006a822f8b664e66a357d52a5&units=metric
const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=aaa87cc006a822f8b664e66a357d52a5&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}