function Modal(props) {
  const closeModal = () => {
    props.setShow(false);
    props.changeStep(1);
  };
  return (
    <div className={`${props.show === true ? "" : "d-none"} modal`}>
      <div className='modal-body'>
        <h1 className='font-weight-600 text-dark mb-0'>Oooops</h1>
        <p className='text-dark'>
          Your age is over our accepted limit.
          <br /> We are sorry but we cannot insure you now.
        </p>
        <button
          className='bg-green shadow-1 px-5 py-4 rounded border-0 text-lg mr-3'
          onClick={closeModal}
        >
          Ok :(
        </button>
      </div>
    </div>
  );
}

export default Modal;
