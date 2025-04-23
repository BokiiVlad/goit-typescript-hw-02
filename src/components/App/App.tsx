import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import queryServer from "../api";
import PacmanLoader from "react-spinners/PacmanLoader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Images } from "../../types";

function App() {
  const [images, setImages] = useState<Images[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  // Стани модального вікна
  const [modalIsOpen, setModal] = useState<boolean>(false);
  const [imageModal, setImageModal] = useState<string>("");

  const handleFilter = (queryValue: string) => {
    setQuery(queryValue);
    setImages([]);
    setPage(1);
  };

  // Запит при зміні значеення і сторінки
  useEffect(() => {
    const updateData = async (): Promise<void> => {
      if (!query) {
        return;
      }

      try {
        setLoader(true);
        setError(false);
        const dataImg: Images[] = await queryServer(query, page);
        setImages((prevData) => [...prevData, ...dataImg]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    updateData();
  }, [query, page]);

  // Перемикання сторінки
  const pageUp = (): void => {
    setPage(page + 1);
  };

  // Відкривання модалки
  const isOpenModal = (urlImage: string): void => {
    setImageModal(urlImage);
    setModal(true);
  };

  // Закриття модалки
  const isCloseModal = (): void => {
    setImageModal("");
    setModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleFilter} />
      {images.length > 0 && (
        <ImageGallery onOpenModal={isOpenModal} value={images} />
      )}
      {loader && (
        <PacmanLoader
          cssOverride={{
            display: "inline-block",
            margin: "0 auto",
            textAlign: "center",
          }}
        />
      )}
      {error && <ErrorMessage />}
      {images.length > 0 && !loader && <LoadMoreBtn pageUp={pageUp} />}
      {modalIsOpen && (
        <ImageModal
          onClose={isCloseModal}
          onModalValue={modalIsOpen}
          value={imageModal}
        />
      )}
    </>
  );
}

export default App;
