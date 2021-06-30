import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [modalIsOpen, setModelIsOpen] = useState(false);
  function deleteHandler() {
    setModelIsOpen(true);
  }
  function closeModalHandler() {
    setModelIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        {modalIsOpen && (
          <Modal onConfrim={closeModalHandler} onCancle={closeModalHandler} />
        )}

        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
    </div>
  );
}

export default Todo;
