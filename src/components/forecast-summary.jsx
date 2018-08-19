import PropTypes from 'prop-types';
import React from 'react';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => (
  <div className="forecast-summary">
    <div className="forecast-summary__date"><span>{moment(props.date).format('ddd Mo MMM')}</span></div>
    <div className="forecast-summary__temperature"><span>{props.temperature}ºC</span></div>
    <div className="forecast-summary__description"><span>{props.description}</span></div>
    <div className="forecast-summary__icon">
      <WeatherIcon name="owm" iconId={props.icon} flip="horizontal" rotate="90" />
    </div>
    <button onClick={() => props.onSelect(props.date)}>More details</button>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};


export default ForecastSummary;

