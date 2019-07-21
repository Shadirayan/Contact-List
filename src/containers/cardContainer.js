import React from "react";
import "./cardContainer.css";
import ContactCard from "../components/contact-card/contact-card";

export default class CardContainer extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    fetch("http://private-05627-frontendnewhire.apiary-mock.com/contact_list")
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(rejected => {
        console.log(rejected);
      });
  }

  render() {
    console.log("hi", this.state.data.length);
    let dataToRender = [];

    if (this.state.data.length)
      this.state.data.map(cb => {
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

    if (this.state.data.length)
      return <div className="contact-card-container">{dataToRender}</div>;
    else return "hi";
  }
}
