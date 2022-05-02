import { Component } from "react";
import "./card-list.style.css";
import Card from "../card/card.component";
class CardList extends Component {
  render() {
    const { country } = this.props;
    return (
      <div className="card-list">
        {country.map((country) => {
          return <Card country={country} />;
        })}
      </div>
    );
  }
}
export default CardList;
