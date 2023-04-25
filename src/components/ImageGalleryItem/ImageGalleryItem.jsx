import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <li className={css.ImageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className={css["ImageGalleryItem-image"]}
      />
    </li>
  );
};

export default ImageGalleryItem;
