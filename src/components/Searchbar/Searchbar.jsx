import React, { Component } from "react";
import css from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    message: "",
  };
  
  handleForm = (e) => {
    e.preventDefault();

    // const search = e.target.elements.search.value;
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };


  handleChange = (e) => {
    this.setState({ message: e.currentTarget.value.toLowerCase() });
  };


  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleForm}>
          <input
            value={this.state.message}
            className={css["SearchForm-input"]}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css["SearchForm-button"]}>
            <span className={css["SearchForm-button-label"]}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
