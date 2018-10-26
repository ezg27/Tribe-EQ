import React, { Component } from 'react';
import MySlider from './MySlider';
import Switch from 'react-switch';
import 'rc-slider/assets/index.css';
import '../css/Bands.css';

class Band extends Component {
  state = {
    eqParam: false
  };
  render() {
    const {
      gainDefs,
      freqDefs,
      bandVals,
      handleGainChange,
      handleFreqChange,
      handleOnOffChange
    } = this.props;
    return (
      <div className="Band-container">
        <MySlider
          scale={gainDefs}
          trackColor={freqDefs.color}
          style={{ gridColumn: 1 }}
          disabled={!bandVals ? false : bandVals['on/off']}
          value={!bandVals ? null : bandVals.gain}
          handleGainChange={handleGainChange}
          band={freqDefs.band}
        />
        <MySlider
          scale={freqDefs}
          trackColor={freqDefs.color}
          style={{ gridColumn: 2 }}
          disabled={!bandVals ? false : bandVals['on/off']}
          value={
            !bandVals
              ? null
              : bandVals.freq_hz
                ? bandVals.freq_hz
                : bandVals.freq_khz * 1000
          }
          handleFreqChange={handleFreqChange}
          band={freqDefs.band}
        />
        <Switch
          onChange={this.handleEQChange}
          checked={this.state.eqParam}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={22}
          uncheckedIcon={false}
          checkedIcon={false}
          disabled={!bandVals ? true : !bandVals['on/off']}
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
          {freqDefs.min === 200 || freqDefs.min === 600
            ? 'Hi/Low Q'
            : 'Peak/Shelf'}
        </p>
        <Switch
          onChange={checked => handleOnOffChange(checked, freqDefs.band)}
          checked={!bandVals ? false : bandVals['on/off']}
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
  // handleOnOffChange = checked => {
  //   this.setState({ onOff: checked });
  // };
  handleEQChange = checked => {
    this.setState({ eqParam: checked });
  };
}

export default Band;
