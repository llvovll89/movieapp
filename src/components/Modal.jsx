import React from 'react';
import { ModalContainer } from '../styles/GlobalStyle';

const Modal = ({ isOpen, onRequestClose, movie }) => {
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <ModalContainer>
      <div className="modal-content">
        {movie.poster_path && (
          <img src={`${POSTER_URL}${movie.poster_path}`} alt={movie.title} />
        )}
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
      <button onClick={onRequestClose}>Close</button>
    </ModalContainer>
  );
};

export default Modal;
