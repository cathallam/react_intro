import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = props => (
  <div className="forecast-details">
    <p>{moment(props.forecast.date).format('ddd Mo MMM')}</p>
    <p>Max Temperature: {props.forecast.temperature.max}</p>
    <p>Min Temperature: {props.forecast.temperature.min}</p>
    <p>Humidity: {props.forecast.humidity}%</p>
    <p>Wind: {props.forecast.wind.speed}mph {props.forecast.wind.direction}</p>
  </div>
);

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      direction: PropTypes.string.isRequired
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default ForecastDetails;

