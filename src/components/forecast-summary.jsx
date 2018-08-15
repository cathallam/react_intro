import PropTypes from 'prop-types';
import React from 'react';

const ForecastSummary = props => (
  <div className="forecast-summary">
    <div className="forecast-summary__date"><span>{props.date}</span></div>
    <div className="forecast-summary__temperature"><span>{props.temperature}ºC</span></div>
    <div className="forecast-summary__description"><span>{props.description}</span></div>
    <div className="forecast-summary__icon"><span>{props.icon}</span></div>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;

