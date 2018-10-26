import React, { Component } from 'react';
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';
import * as api from '../api';
import '../css/Controls.css';
import '../css/PresetList.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '20%',
    height: '15%',
    display: 'grid',
    gridTemplateRows: '2fr 1fr',
    textAlign: 'center',
    gridGap: '5px'
  }
};

class Controls extends Component {
  state = {
    name: '',
    modalIsOpen: false,
    presetDeleted: false,
    modalMessage: null
  };
  render() {
    return (
      <div className="Controls-container">
        <button className="Control-button" onClick={this.handleUpdate}>
          Update Preset
        </button>
        <button className="Control-button" onClick={this.openModal}>
          Create New Preset
        </button>
        <Modal
          isOpen={this.state.presetDeleted}
          style={customStyles}
          ariaHideApp={false}
        >
          <p>{this.state.modalMessage}</p>
        </Modal>
        <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          ariaHideApp={false}
        >
          <button className="Exit-button" onClick={this.closeModal}>
            X
          </button>
          <form className="Preset-form">
            <TextField
              id="standard-name"
              required
              InputLabelProps={{ required: false }}
              label="Name"
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
            <button className="Create-button" onClick={this.handleCreate}>
              Create
            </button>
          </form>
        </Modal>
        <button className="Control-button" onClick={this.handleDelete}>
          Delete Current Preset
        </button>
      </div>
    );
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleUpdate = () => {
    const { currentPreset } = this.props;
    api.updatePreset(currentPreset).then(response => {
      this.setState({
        presetDeleted: true,
        modalMessage: `Preset '${response.name}' updated!`
      });
      setTimeout(() => {
        this.setState({ presetDeleted: false });
      }, 2000);
    });
  };

  handleCreate = e => {
    e.preventDefault();
    const { name } = this.state;
    const { currentPreset, recallPresets } = this.props;
    currentPreset.name = name;
    const { id, ...preset } = currentPreset;
    api.createPreset(preset).then(response => {
      recallPresets();
      this.closeModal();
      this.setState({
        presetDeleted: true,
        modalMessage: `Preset '${response.name}' created!`
      });
      setTimeout(() => {
        this.setState({ presetDeleted: false });
      }, 2000);
    });
  };

  handleDelete = () => {
    const { currentPreset, recallPresets } = this.props;
    api.deletePreset(currentPreset.id).then(response => {
      recallPresets();
      this.setState({
        presetDeleted: true,
        modalMessage: response.message
      });
      setTimeout(() => {
        this.setState({
          presetDeleted: false
        });
      }, 2000);
    });
  };
}

export default Controls;
