import React from "react";
import "./header.css";

export class Header extends React.Component {
  filterDrivers(value) {
    let filteredArray = this.props.nonFilterdData.filter(obj =>
      obj.name.includes(value)
    );
    this.props.func(filteredArray);
  }

  render() {
    return (
      <div>
        <div className="nav-container">
          <div className="nav">
            <p className="header-title">Contact List</p>
            <input
              type="text"
              name="search"
              className="input-style"
              placeholder="Search.."
              onChange={({ target }) => this.filterDrivers(target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
