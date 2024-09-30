import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './services/api';
import Modal from 'react-modal';
import { Toaster } from 'react-hot-toast';

Modal.setAppElement('#root');

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [query, setQuery] = useState('');

  const searchImages = async newQuery => {
    setImages([]);
    setQuery(newQuery);
    setError(null);
    setIsLoading(true);
    try {
      const newImages = await fetchImages(newQuery, 1);
      setImages(newImages);
      setPage(1);
      if (newImages.length === 0) {
        setError('No images were found for your request.');
      }
    } catch (err) {
      console.error('Error searching images:', err);
      setError('An error occurred while loading images.');
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreImages = async () => {
    const nextPage = page + 1;
    const newImages = await fetchImages(query, nextPage);
    setImages(prevImages => [...prevImages, ...newImages]);
    setPage(nextPage);
  };

  const openModal = image => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            margin: '15px',
          },
        }}
      />
      <SearchBar onSubmit={searchImages} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {images.length > 0 && !isLoading && !error && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}

export default App;
