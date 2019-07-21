import React from "react";
import "./contact-card.css";

export default class ContactCard extends React.Component {
  render() {
    return (
      <div style="contact-card-container">
        <div class="contact-card showhim">
          <img class="bg-img" src={this.props.profile_image} alt="driver" />
          <div class="driver-type" />
          <div class="driver-info">
            <h4>{this.props.name}</h4>
            <p>{this.props.driverType} Driver</p>
            <div class="showme">
              <p>Phone Number: {this.props.phone}</p>
              <p>email:{this.props.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
