import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }
  storeInput = React.createRef()

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.storeInput.current.value
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      <form action=""
            onSubmit={this.goToStore}
            className="store-selector">
        <h2>Please select a store</h2>
        <input
          ref={this.storeInput}
          type="text"
          required
          defaultValue={ getFunName() }
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
