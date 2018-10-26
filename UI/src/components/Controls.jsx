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
    gridGap: '5px'
  }
};

class Controls extends Component {
  state = {
    name: '',
    modalIsOpen: false,
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
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          ariaHideApp={false}
        >
        <button className='Exit-button' onClick={this.closeModal}>X</button>
          <TextField
            id="standard-name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <button className='Create-button' onClick={this.handleCreate}>Create</button>
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
      console.log(response);
    });
  };

  handleCreate = () => {};

  handleDelete = () => {
    const { currentPreset, recallPresets } = this.props;
    api.deletePreset(currentPreset.id).then(response => {
      console.log(response);
      recallPresets();
    });
  };
}

export default Controls;
