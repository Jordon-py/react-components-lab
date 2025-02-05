// src/WeatherForecast.jsx
import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon.jsx'; 
import WeatherData from './WeatherData.jsx';

export default function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  return (
    <div className="weather">
      
      {/* `WeatherIcon` handles the weather icon image */}
      <WeatherIcon img={img} alt={imgAlt} />
      
      {/* `WeatherData` handles textual info */}
      <WeatherData day={day} conditions={conditions} time={time} />
      
    
      
      
    
    </div>
  );
}
