import Modal from 'react-modal';

Modal.setAppElement('body');

const ThreeDModelModal = (props: {
  isOpen: boolean;
  onClose: () => void;
  onAfterOpen?: () => void;
  extraClasses?: string;
  children: React.ReactNode;
}) => {
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
