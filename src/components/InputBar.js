import React from 'react';
import '../stylesheets/InputBar.css';

class InputBar extends React.Component {
  state = {
    inputTerm: ''
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputTerm);
    this.setState({inputTerm: ''});
  }

  render() {
    return (
        <div className="ui container center aligned">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="ui fluid action input">
              <input type="text" value={this.state.inputTerm} placeholder="Enter Item" onChange={(e) => this.setState({ inputTerm: e.target.value })} />
              <button className="ui button" type="submit">Add Item</button>
            </div>
          </form>
        </div>
    );
  }

};

export default InputBar;
