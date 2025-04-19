import css from "./ImageCard.module.css";

export default function ImageCard({ image, onOpenModal }) {
  const handleClick = () => {
    onOpenModal(image.urls.regular);
  };

  return (
    <div>
      <img
        onClick={handleClick}
        className={css.divCard}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
