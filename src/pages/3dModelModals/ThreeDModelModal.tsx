import Modal from 'react-modal';

Modal.setAppElement('body');

const ThreeDModelModal = (props: any) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      overlayClassName={'threedModelModalOverlay'}
      closeTimeoutMS={300}
      className={props.extraClasses ?? ''}
      onAfterOpen={props.onAfterOpen}
    >
      {props.children}
    </Modal>
  );
};

export default ThreeDModelModal;
