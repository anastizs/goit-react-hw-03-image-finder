import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
// import fetchPhoto from "../../servise/photo-api";

// const message = " ";
// const currentPage = 1;

// const ddd = api.fetchPhoto(message, currentPage);
// console.log(ddd);

class App extends Component {
  state = {
    hits: [],
    message: "",
    currentPage: 1,
    showModal: false,
  };


  handleFormSubmit = (message) => {
    this.setState = {
      // hits: [],
      message: message,
      currentPage: 1,
    };
  };

  // fetchPhoto = async ()=>{
  //   const { currentPage, message } = this.state;
  //   const searchData = await fetchPhoto(message, currentPage);
  //   this.setState(({ hits }) => ({
  //     hits: [...hits, ...searchData.results],
  //     total: searchData.total,
  //   }));
  // }

  render() {
    const { message, currentPage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery message={message} currentPage={currentPage} />
      </>
    );
  }
}
export default App;
