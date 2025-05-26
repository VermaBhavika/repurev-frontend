import React from "react";
import styles from "../../styles/modal.module.scss"; // your own styling
import Image from "next/image";
import Button from "../shared/button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    modalData?: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, modalData }) => {
    if (!isOpen) return null;
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                {modalData?.heading && <h2>{modalData?.heading}</h2>}
                {modalData?.text && <p>{modalData?.text}</p>}
                {modalData?.image && <div className="mb-20"><Image src={modalData?.image} width={200} height={100} alt={"modal image"}/></div>}
                {Object.keys(modalData?.button)?.length > 0 && <Button data={modalData?.button}/>}
            </div>
        </div>
    );
};

export default Modal;
