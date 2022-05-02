import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.compoenent";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      country: [],
      toLower: "",
    };
  }
  componentDidMount() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { country: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const toLower = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { toLower };
    });
  };

  render() {
    const { country, toLower } = this.state;
    const { onSearchChange } = this;
    const filterCountry = country.filter((country) => {
      return country.name.common.toLocaleLowerCase().includes(toLower);
    });
    return (
      <div className="App">
        <h1 className="app-title">Countries</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search your country"
          className="monster-search-box"
        />
        <CardList country={filterCountry} />
      </div>
    );
  }
}

export default App;
