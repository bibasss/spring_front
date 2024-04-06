import React, { useState } from 'react';
import Modal from 'react-modal';

// Установите элемент app элементом приложения
Modal.setAppElement('#root');

function AvatarModal({ avatarSrc }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Открыть аватарку</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Аватарка"
            >
                <img src={avatarSrc} alt="Аватарка" />
                <button onClick={closeModal}>Закрыть</button>
            </Modal>
        </div>
    );
}

export default AvatarModal;
