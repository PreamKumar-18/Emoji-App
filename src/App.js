import React, { PureComponent } from "react";
import Header from "./Header/Header";
import SearchBar from "./Searchbar/SearchBar";
import EmojiResultRow from "./Emojis/EmojiResultRow";
import Filter from "./Emojis/Filter";
export default class App extends PureComponent {
  state = {
    filteredEmojis: Filter("", 20),
  };

  handleChange = (event) => {
    this.setState({
      filteredEmojis: Filter(event.target.value, 15),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar handleChange={this.handleChange} />
        <EmojiResultRow data={this.state.filteredEmojis} />
      </div>
    );
  }
}
