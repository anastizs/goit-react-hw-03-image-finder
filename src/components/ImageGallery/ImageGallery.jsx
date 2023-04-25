import React, { Component } from "react";
import fetchPhoto from "../../servise/photo-api";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import css from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    hits: [],
    status: "idle",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.message !== this.props.message) {
      this.fetchLoad();
    }
  }

  fetchLoad = () => {
    const { message, currentPage } = this.props;

    fetchPhoto(message, currentPage)
      .then((response) => {
        if (response.length === 0) {
          return;
        }
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...response],
          status: "resolve",
        }));
      })
      .catch((error) => this.setState({ status: "rejected" }));
  };

  render() {
    const { images, status } = this.state;

    if (status === "pending") {
      return <Loader />;
    }
    if (status === "resolve") {
      return (
        <>
          <ul className={css.ImageGallery}>
            {images.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
              />
            ))}
          </ul>
          {this.state.images.length !== 0 ? (
            <Button onClick={this.props.loadMoreBtn} />
          ) : (
            alert("No results")
          )}
        </>
      );
    }
  }
}

export default ImageGallery;
