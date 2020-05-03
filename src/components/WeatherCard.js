import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faTimes,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";
import WeatherForm from "./WeatherForm";
import TempSection from "./TempSection";
import WeatherSections from "./WeatherSections";
import WeatherService from "../services/WeatherService";

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weather: "",
      temp: "",
      tempMax: "",
      tempMin: "",
      wind: "",
      humidity: "",
      pressure: "",
      country: "",
      loaded: false,
    };
  }

  handleSearch = (event) => {
    this.getWeatherInfo({
      ...event,
    });
  };

  getWeatherInfo(coords) {
    WeatherService.getWeatherInfo(
      Math.floor(coords.latitude),
      Math.floor(coords.longitude)
    ).then(({ data }) => {
      this.setState({
        loaded: true,
        name: data.name,
        weather: data.weather[0].main,
        temp: data.main.temp,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        country: data.sys.country,
      });
    });
  }

  getIcon(weather) {
    switch (weather) {
      case "Clouds":
        return faCloud;
      case "Clear":
        return faSun;
      case "Rain":
        return faCloudRain;
      default:
        return faTimes;
    }
  }

  render() {
    return (
      <div className="weather-container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <WeatherForm onSearch={this.handleSearch} />
          </div>
        </div>
        {this.state.loaded && this.renderWeatherInfo()}
      </div>
    );
  }

  renderWeatherInfo() {
    const weatherIcon = (
      <FontAwesomeIcon icon={this.getIcon(this.state.weather)} size="8x" />
    );
    return (
      <div className="row text-center">
        <div className="col-md-12 mt-5">
          <span>{`${this.state.name}, ${this.state.country}`}</span>
        </div>
        <div className="col-md-12 mt-5">{weatherIcon}</div>
        <div className="col-md-12 mb-5">
          <TempSection
            temp={this.state.temp}
            tempMin={this.state.tempMin}
            tempMax={this.state.tempMax}
          />
        </div>
        <div className="col-md-12">
          <WeatherSections
            wind={this.state.wind}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
          />
        </div>
        <div className="col-md-12 mt-4 mb-5">TODAY</div>
      </div>
    );
  }
}

export default WeatherCard;
