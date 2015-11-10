import React from 'react';
import Axios from 'axios';
import OpenWeatherMap from '../openWeatherMap';

export default class Title extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
           <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Current Weather
                </h3>
              </div>
              <div className="panel-body">
               {this.state.currentWeather.main ? this.getWeatherView() : <span> data is unavailable</span>}
              </div>
           </div>
          </div>
        </div>
      </div>
    );
  }


  state = {
    currentWeather: {},
    weatherUpDate: ""
  }

  componentDidMount = () => {
    var self = this;
    this.getCurrentWeatherData();
    this.timer =  setInterval(this.getCurrentWeatherData.bind(this), 300000);
  }

  componentWillUnmount = () =>{
    clearInterval(this.timer);
  }


  getWeatherView(){
    var timestamp = this.state.weatherUpDate.split(',');

    return <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <img src = {this.createIconUrl(this.state.currentWeather.weather[0].icon)}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-md-offset-3">
           {this.state.currentWeather.weather[0].description}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          {this.state.currentWeather.name},{this.state.currentWeather.sys.country}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
         Temperature: 
         </div>
         <div className="col-md-6">
             {this.state.currentWeather.main.temp} F
         </div>
      </div>
      <div className="row">
         <div className="col-md-6">
            Humidity: 
         </div>
         <div className="col-md-6">
            {this.state.currentWeather.main.humidity} %
         </div>
      </div>
      <div className="row">
         <div className="col-md-6">
         Pressure: 
          </div>
         <div className="col-md-6">
         {this.state.currentWeather.main.pressure} "/hg
         </div>
      </div>
      {this.state.currentWeather.rain ? 
         <div className="row">
             <div className="col-md-6">
               Rain: 
             </div>
             <div className="col-md-6">
                {this.state.currentWeather.rain['3h']}"
             </div>
         </div>
      : '' }
      <div className="row">
          <div className="col-md-6">
            Wind Speed: 
          </div>
         <div className="col-md-6">
            {this.state.currentWeather.wind.speed} MPH
         </div>
      </div>
      <div className="row">
         <div className="col-md-6">
            Wind Angle: 
         </div>
         <div className="col-md-6">
            {this.state.currentWeather.wind.deg} deg
         </div>
      </div>
      <div className="row">
         <div className="col-md-6">
            {timestamp[0]}
         </div>
          <div className="col-md-6">
            {timestamp[1]}
          </div>
      </div>
    </div>
  }

  createUrlLatLong(){
     // url: 'http://api.openweathermap.org/data/2.5/forecast/city?' //'http://api.openweathermap.org/data/2.5/forecast/city?id={this.cityId}&APPID={this.key}'
  return OpenWeatherMap.urlLatLong + 'lat=' + OpenWeatherMap.baseLattitude  + '&lon='+ OpenWeatherMap.baseLongitude + '&units=' + OpenWeatherMap.units + '&APPID='+ OpenWeatherMap.key;
  }

  createUrlCityId(){
  	 // url: 'http://api.openweathermap.org/data/2.5/forecast/city?' //'http://api.openweathermap.org/data/2.5/forecast/city?id={this.cityId}&APPID={this.key}'
	return OpenWeatherMap.urlCityId + 'id=' + OpenWeatherMap.cityId + '&units=' + OpenWeatherMap.units + '&APPID='+ OpenWeatherMap.key;
  }

  createIconUrl(icon){
  	return OpenWeatherMap.iconUrl + icon + '.png';
  }

   createRainHtml(){
   return  <div className="row">
             <div className="col-md-6">
               Rain: 
             </div>
             <div className="col-md-6">
                {this.state.currentWeather.rain['3h']}
             </div>
         </div>
  }

  getCurrentWeatherData(){
   Axios.get(this.createUrlLatLong(), {
      params: {
      },
      headers: {
      }
    })
    .then((response) => {
        var d = new Date();
        console.log(response.data);
         this.setState({
            currentWeather: response.data,
            weatherUpDate: d.toLocaleString()
         });
      return response.data;
    })
    .catch((response) => {
      console.error(response);
    });
  }



};
