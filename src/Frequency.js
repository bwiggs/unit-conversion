import React from 'react';
import UnitInput from './UnitInput';
import { roundToThousandths } from './helpers'

import fakeDataFeed from './fakeDataFeed';
// NOTE: dataFeed assignment needs to be configured for each calculator
const dataFeed = fakeDataFeed.frequency;

// Child component of App
// Parent component of UnitInput
class Frequency extends React.Component {
  constructor(props) {
    super(props);

    this.handleFocusCalculator = this.handleFocusCalculator.bind(this);
    this.handleChangeCalculator = this.handleChangeCalculator.bind(this);

    this.state = {
      focus: '',
      // NOTE: <input> names need to be configured for each calculator
      hz: '',
      khz: '',
      mhz: '',
      ghz: ''
    };
  }

  handleFocusCalculator(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      focus: name,
    });

    this.props.onFocusApp(dataFeed.calculator_name);
  }

  handleChangeCalculator(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      // NOTE: [key]: value calculations need to be configured for each calculator
      hz: roundToThousandths(dataFeed.units[name].conversions['hz'].calculation(value)),
      khz: roundToThousandths(dataFeed.units[name].conversions['khz'].calculation(value)),
      mhz: roundToThousandths(dataFeed.units[name].conversions['mhz'].calculation(value)),
      ghz: roundToThousandths(dataFeed.units[name].conversions['ghz'].calculation(value))
    });
  }

  render() {
    const calculator_icon = dataFeed.calculator_icon;
    const calculator_name = dataFeed.calculator_name;
    const focus = this.state.focus;
    const onFocusCalculator = this.handleFocusCalculator;
    const onChangeCalculator = this.handleChangeCalculator;
    const plural_form = dataFeed.plural_form;
    const showCalculator = this.props.showCalculator;
    const showCalculatorDetails = this.props.showCalculatorDetails;
    const units = dataFeed.units;

    if (!showCalculator) {
      return null;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col mb-3 mt-3">
              <img className="measurement-icon" src={calculator_icon} alt="{calculator_name}" />
              <h1 className="measurement-name">{calculator_name}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="hz"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.hz} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="khz"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.khz} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="mhz"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.mhz} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="ghz"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.ghz} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Frequency;
