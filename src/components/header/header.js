import React from 'react';
import './header.css';

export class Header extends React.Component {
    render() {
      return (
          <div>
        <div className="nav-container">
         <div className="nav">
           <p>Contact List</p>
           <input type="text" name="search" className="input-style" placeholder="Search.."/>
         </div>
          </div>
        </div>
      );
    }
  }
  export default Header;