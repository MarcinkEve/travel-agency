import React from "react";
import Data from "../Data/Data";
import "./modal.scss";

const Modal = ({ usdata, setInsert }) => {
  return (
    <>
      <div className="modal">
        <div className="modal__close">
          {/* this is "Close" button */}
          <button onClick={() => setInsert(0)} type="button" className="modal__close--button">
            <span aria-hidden="true" className="modal__close--button-X">&times;</span>
          </button>
        </div>
        <div className="modal__data">
          <Data usdata={usdata}></Data>
        </div>
      </div>
    </>
  );
};

export default Modal;
