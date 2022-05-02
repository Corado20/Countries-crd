import { Component } from "react";
import "./card.style.css";

class Card extends Component {
  render() {
    const { name, fifa, maps, flags } = this.props.country;
    return (
      <div className="card-container" key={fifa}>
        <img src={`${flags.png}`} alt={`country ${name.common}`} />
        <h2>{name.common}</h2>
        <a href={`${maps.googleMaps}`}>Country location</a>
      </div>
    );
  }
}
export default Card;
