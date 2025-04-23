import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Images, OpenModal } from "../../types";

type Props = {
  value: Images[];
  onOpenModal: OpenModal;
};

export default function ImageGallery({ value, onOpenModal }: Props) {
  return (
    <ul className={css.imageField}>
      {value.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} onOpenModal={onOpenModal} />
          </li>
        );
      })}
    </ul>
  );
}
