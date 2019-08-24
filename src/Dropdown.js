import React, { Component } from 'react';
import Users from './Users';

class EnrollDropdown extends Component {

  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown" style={{ background: "blue", width: "200px" }} >
        <div className="button" onClick={this.showDropdownMenu}>Select user</div>
        {this.state.displayMenu ? (
          <ul>
            <Users users={this.props.users} onClickUser={this.props.onClickUser}/>
          </ul>
        ) :
          (
            null
          )
        }
      </div>

    );
  }
}
export default EnrollDropdown;