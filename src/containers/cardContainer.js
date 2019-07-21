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
      .then(data => console.log(data))
      .catch(rejected => {
        console.log(rejected);
      });
    console.log(this.state);
  }

  render() {
    return <div />;
  }
}
// if (this.state.data.length > 0) {
//   return this.state.data.map(cb => {
//     return <ContactCard email={this.state.data.email} />;
//   });
