import React from 'react';
import axios from 'axios';

import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: [],
      location: {
        city: "", 
        country: ""
      },
      selectedDate: 0,
    };
    //
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  componentDidMount() {
    axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=London')
      .then((response) => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
        });
      });
  }

  // Receives a date as a parameter, and sets that date as the selected date in the component state.
  handleForecastSelect(date) {
    //The function gets passed a date, and we use the this.setState method to set that date on our state object.
    this.setState({
      selectedDate: date,
    });
  }
  
  render() {
   
    //return the forecast that matches the selected date
    const selectedForecast = this.state.forecasts.find(
      forecast => forecast.date === this.state.selectedDate 
    );

    return (
      <div className="forecast">
      <LocationDetails
        city={this.state.location.city}
        country={this.state.location.country}
      />
      <ForecastSummaries forecasts={this.state.forecasts} onForecastSelect={this.handleForecastSelect} />
      {
        selectedForecast && <ForecastDetails forecast={selectedForecast} />
      }
    </div>
    );
  }
}

export default App;
