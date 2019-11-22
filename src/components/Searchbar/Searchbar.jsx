import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.scss";

class Searchbar extends Component {
  render() {
    return (
      <section className={styles.searchbarContainer}>
        <input
          className={styles.searchbarInput}
          onChange={this.props.setSearchText}
          placeholder="Search list..."
          value={this.props.searchText}
          type="text"
        />
      </section>
    );
  }
}

Searchbar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired
};

export default Searchbar;
