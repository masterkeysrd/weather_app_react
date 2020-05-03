import Axios from "axios";

const api = "https://fcc-weather-api.glitch.me/api";

const WeatherService = {
  getWeatherInfo: (lat, lon) => {
    return Axios.get(`${api}/current`, {
      params: { lat, lon },
    });
  },
};

export default WeatherService;
