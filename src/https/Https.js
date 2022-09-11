import axios from "axios";

export async function weatherapi(para) {
    try {
        const data = await axios.get(`https://openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&units=${para}&appid=439d4b804bc8187953eb36d2a8c26a02`)
        return data.data
    } catch (error) {
        console.log(error);
    }
}
