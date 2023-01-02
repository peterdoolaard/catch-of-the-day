import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      desc: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
  }
  handleChange = event => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]:
        event.currentTarget.name === 'price'
          ? parseFloat(event.currentTarget.value)
          : event.currentTarget.value
    }
    this.props.updateFish(this.props.index, updatedFish)
  }

  handleDelete = () => {
    this.props.deleteFish(this.props.index)
  }

  render() {
    return (
      <form className="fish-edit">
        <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
        <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
        <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="desc"  onChange={this.handleChange} value={this.props.fish.desc} />
        <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}  />
        <button onClick={this.handleDelete}>Remove Fish</button>
      </form>
    )
  }

}

export default EditFishForm
