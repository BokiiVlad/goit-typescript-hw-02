import { Images, OpenModal } from "../../types";
import css from "./ImageCard.module.css";

type Props = {
  image: Images;
  onOpenModal: OpenModal;
};

export default function ImageCard({ image, onOpenModal }: Props) {
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
