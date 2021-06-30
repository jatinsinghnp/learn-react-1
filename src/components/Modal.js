function Modal(props) {
  function cancleHandler() {
    props.onCancle();
  }
  function confrimHandler() {
    props.onConfrim();
  }
  return (
    <div className="modal">
      <p>Are u sure </p>
      <button className="btn btn--alt" onClick={cancleHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confrimHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
