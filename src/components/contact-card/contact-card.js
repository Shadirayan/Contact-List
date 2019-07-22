import React from "react";
import "./contact-card.css";

export default class ContactCard extends React.Component {
  render() {
    return (
      <div className="contact-card showDetailedInfo">
        <div className="trans">
          <img
            className="bg-img"
            src={
              this.props.src === "" || this.props.src === undefined
                ? `http://saltlifetherapy.ie/wp-content/uploads/2018/11/no-photo-1.png`
                : `${this.props.src}`
            }
            alt="driver"
          />
        </div>
        <img
          alt="driver-type"
          src={
            this.props.driverType.toLowerCase().includes("professional")
              ? "https://sendeyo.com/up/d/861df6a29e"
              : "https://sendeyo.com/up/d/2d5c9ce937"
          }
          className="driver-type"
        />
        <div className="driver-info">
          <h4>{this.props.name}</h4>
          <p>{this.props.driverType} Driver</p>
          <div className="showNormalInfo">
            <p>Phone Number: {this.props.phone}</p>
            <p>email:{this.props.email}</p>
          </div>
        </div>
      </div>
    );
  }
}
