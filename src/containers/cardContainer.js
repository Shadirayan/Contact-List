import React from "react";
import "./cardContainer.css";
import ContactCard from "../components/contact-card/contact-card";

export default class CardContainer extends React.Component {
  render() {
    let dataToRender = [];

    if (this.props.data.length)
      this.props.data.map(cb => {
        dataToRender.push(
          <ContactCard
            src={cb.profile_image}
            name={cb.name}
            driverType={cb.driverType}
            phone={cb.phone}
            email={cb.email}
          />
        );
      });

    if (this.props.data.length)
      return <div className="contact-card-container">{dataToRender}</div>;
    else return "Fetching Data";
  }
}
