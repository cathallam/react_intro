import React from 'react';
import PropTypes from 'prop-types';

import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.forecasts[0].date,
    };
    //
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }
  // Receives a date as a parameter, and sets that date as the selected date in the component state.
 
  handleForecastSelect(date) {
    //The function gets passed a date, and we use the this.setState method to set that date on our state object.
    this.setState({
      selectedDate: date,
    });
  }
  
  render() {
    const props = this.props;
    //return the forecast that matches the selected date
    const selectedForecast = props.forecasts.find(
      forecast => forecast.date === this.state.selectedDate
    );

    return (
      <div className="forecast">
      <LocationDetails
        city={props.location.city}
        country={props.location.country}
      />
      <ForecastSummaries forecasts={props.forecasts} onForecastSelect={this.handleForecastSelect} />
      <ForecastDetails forecast={selectedForecast} />
    </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};



export default App;
