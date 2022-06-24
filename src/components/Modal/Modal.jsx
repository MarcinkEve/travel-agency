import React from "react";
import Data from "../Data";
import "./modal.scss";

const Modal = ({ dataLS, setInsert }) => {
  return (
    <>
      <div className="modal">
        <div className="modal__close">
          <button
            onClick={() => setInsert(0)}
            type="button"
            className="modal__close--button"
          >
            <span aria-hidden="true" className="modal__close--button-X">
              &times;
            </span>
          </button>
        </div>
        <div className="modal__data">
          <Data dataLS={dataLS}></Data>
        </div>
      </div>
    </>
  );
};

export default Modal;
