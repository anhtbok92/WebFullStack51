import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalBootstrap = ({ isModalOpen, modalContent, closeModal }) => {
    console.log('modalContent: ', modalContent);
    console.log('closeModal: ', closeModal);
    return (
        <Modal
            show={isModalOpen}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h4>{modalContent}</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalBootstrap;