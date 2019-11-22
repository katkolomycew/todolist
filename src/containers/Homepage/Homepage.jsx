import React from "react";
import Searchbar from "../../components/Searchbar";
import ToDoList from "../../components/ToDoList";
import styles from "./Homepage.module.scss";
import { firestore } from "firebase";

class Homepage extends React.Component {
  state = {
    searchText: "",
    filteredList: []
  };

  componentDidMount() {
    firestore.collection("");
  }

  render() {
    return (
      <div className={styles.homepageBackground}>
        <Searchbar />
        <ToDoList />
      </div>
    );
  }
}

export default Homepage;
