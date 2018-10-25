import React, { Component } from 'react';
import MySlider from './MySlider';
import Switch from 'react-switch';
import 'rc-slider/assets/index.css';
import '../css/Bands.css';

class Band extends Component {
  state = {
    onOff: false,
    eqParam: false
  };
  render() {
    const { gainVals, freqVals } = this.props;
    return (
      <div className="Band-container">
        <MySlider
          scale={gainVals}
          trackColor={freqVals.color}
          style={{ gridColumn: 1 }}
        />
        <MySlider
          scale={freqVals}
          trackColor={freqVals.color}
          style={{ gridColumn: 2 }}
        />
        <Switch
          onChange={this.handleOnOffChange}
          checked={this.state.onOff}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={22}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={15}
          width={36}
          className="Param-switch"
          id="Param-switch"
        />
        <p
          className="Switch-labels"
          htmlFor="EQParam-switch"
          style={{ gridRow: 2, gridColumn: 1 }}
        >
          Peak/Shelf
        </p>
        <Switch
          onChange={this.handleEQChange}
          checked={this.state.eqParam}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={22}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={15}
          width={36}
          className="OnOff-switch"
          id="OnOff-switch"
        />
        <p
          className="Switch-labels"
          htmlFor="OnOff-switch"
          style={{ gridRow: 2, gridColumn: 2 }}
        >
          Off/On
        </p>
      </div>
    );
  }
  handleOnOffChange = checked => {
    this.setState({ onOff: checked });
  };
  handleEQChange = checked => {
    this.setState({ eqParam: checked });
  };
}

export default Band;
