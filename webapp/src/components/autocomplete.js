import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import './autocomplete.css';

export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    redirect:false
  };
  option = React.createRef();
  state = {
  open: false,
};

  onChange = (e) => {
    console.log('onChanges');

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: { activeOption, filteredOptions, showOptions, userInput ,redirect}
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options" ref={this.option}>
            {filteredOptions.map((optionName, index) => {
              let className;
              if (true){
                className = 'option-active';
              }
              return (
                <Link to={{pathname:'/search',state:{name:optionName}}}><li className={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li></Link>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
      <div className="Header">
        <div className="search">
          <input
            type="text"
            placeholder="Search for a title..."
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          {/*<input type="submit" value="" className="search-btn" />  */}
        </div>
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

export default Autocomplete;
