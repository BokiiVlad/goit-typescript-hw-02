import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ onClose, onModalValue, value }) {
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
