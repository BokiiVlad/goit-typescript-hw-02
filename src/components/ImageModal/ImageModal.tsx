import Modal from "react-modal";
import css from "./ImageModal.module.css";

type Props = {
  onClose: () => void;
  onModalValue: boolean;
  value: string;
};

export default function ImageModal({ onClose, onModalValue, value }: Props) {
  return (
    <div>
      <Modal
        isOpen={onModalValue}
        onRequestClose={onClose}
        overlayClassName={css.modalOverlay}
        className={css.modalContent}
        ariaHideApp={false}
      >
        <img className={css.image} src={value} alt="image" />
      </Modal>
    </div>
  );
}
