import React from "react";
import "./contact-card.css";

export default class ContactCard extends React.Component {
  render() {
    return (
      <div className="contact-card-container">
        <div className="contact-card showhim">
          <img className="bg-img" src={this.props.src} alt="driver" />
          <div className="driver-type" />
          <div className="driver-info">
            <h4>{this.props.name}</h4>
            <p>{this.props.driverType} Driver</p>
            <div className="showme">
              <p>Phone Number: {this.props.phone}</p>
              <p>email:{this.props.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
