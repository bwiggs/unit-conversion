import React from 'react';
import logo from './unit-conversion-logo.svg';
import 'bootstrap-4-grid/css/grid.min.css'
import './App.css';

import Search from './Search';
import EmptySearch from './EmptySearch';

import Angle from './Angle';
import Area from './Area';
import Astronomy from './Astronomy';
import Energy from './Energy';
import Force from './Force';
import Frequency from './Frequency';
import Length from './Length';
import Mass from './Mass';
import Pressure from './Pressure';
import Speed from './Speed';
import Temperature from './Temperature';
import Time from './Time';
import Volume from './Volume';
import fakeDataFeed from './fakeDataFeed';

const dataFeed = fakeDataFeed;

const angleTerms = dataFeed.angle.search_terms;
const areaTerms = dataFeed.area.search_terms;
const astronomyTerms = dataFeed.astronomy.search_terms;
const energyTerms = dataFeed.energy.search_terms;
const forceTerms = dataFeed.force.search_terms;
const frequencyTerms = dataFeed.frequency.search_terms;
const lengthTerms = dataFeed.length.search_terms;
const massTerms = dataFeed.mass.search_terms;
const pressureTerms = dataFeed.pressure.search_terms;
const speedTerms = dataFeed.speed.search_terms;
const temperatureTerms = dataFeed.temperature.search_terms;
const timeTerms = dataFeed.time.search_terms;
const volumeTerms = dataFeed.volume.search_terms;

const searchIndex = {
  'angle': angleTerms,
  'area': areaTerms,
  'astronomy': astronomyTerms,
  'energy': energyTerms,
  'force': forceTerms,
  'frequency': frequencyTerms,
  'length': lengthTerms,
  'mass': massTerms,
  'pressure': pressureTerms,
  'temperature': speedTerms,
  'speed': temperatureTerms,
  'time': timeTerms,
  'volume': volumeTerms
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleFocusApp = this.handleFocusApp.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      visibleCalcs: Object.keys(searchIndex)
    };
  }

  isFocused(calc) {
    return this.state.activeCalculator === calc;
  }

  isVisible(calc) {
    return this.state.visibleCalcs.includes(calc);
  }

  noSearchResults() {
    return this.state.visibleCalcs.length === 0;
  }

  search(event) {
    let query = event.target.value.toLowerCase();

    // reset the list of visible calculators
    let visibleCalcs = []

    // loop through each calculator in the search index to test their terms
    for (let unit in searchIndex) {
      // check to see if the terms for the current calculator match the search query
      let searchHit = searchIndex[unit].some((keywords) => keywords.indexOf(query) >= 0);

      // ig it's a hit, mark it as visible
      if (searchHit) {
        visibleCalcs.push(unit);
      }
    }

    // commit the change
    this.setState({ visibleCalcs });
  }

  handleFocusApp(calculatorName) {
    this.setState({
      activeCalculator: calculatorName.toLowerCase()
    });
  }

  render() {
    return (
      <div className="App">
        <header className="mb-3">
          <nav className="container">
            <div className="row">
              <div className="col">
                <img src={logo} alt="Unit Conversion" />
                <h1>Unit Conversion</h1>
                <Search onSearchApp={this.search} />
              </div>
            </div>
          </nav>
        </header>

        <EmptySearch showEmptySearch={this.noSearchResults()} />

        <Angle
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('angle')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('angle')} />
        <Area
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('area')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('area')} />
        <Astronomy
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('astronomy')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('astronomy')} />
        <Energy
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('energy')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('energy')} />
        <Force
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('force')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('force')} />
        <Frequency
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('frequency')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('frequency')} />
        <Length
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('length')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('length')} />
        <Mass
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('mass')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('mass')} />
        <Pressure
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('pressure')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('pressure')} />
        <Speed
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('speed')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('speed')} />
        <Temperature
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('temperature')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('temperature')} />
        <Time
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('time')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('time')} />
        <Volume
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.isVisible('volume')}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.isFocused('volume')} />

        <footer className="mt-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={logo} alt="Unit Conversion" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
