import React from "react";
import Data from "../Data/Data";

const Modal = ({ usdata, setInsert}) => {
    return (
        <>
          <div style={{width: "100%", height: "100%", position:"absolute", top: 0}}>
            <div>
              {/* this is "Close" button */}
              <button onClick={() => setInsert(0)} type="button" className="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div>
              <Data usdata={usdata}></Data>
            </div>
          </div>
        </>
      );
};

export default Modal;