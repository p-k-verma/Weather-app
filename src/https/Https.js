import axios from "axios";

export async function weatherapi() {
    try {
        const data = await axios.get('https://openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02')
        console.log(data.data);
        return data.data
    } catch (error) {
        console.log(error);
    }
}
