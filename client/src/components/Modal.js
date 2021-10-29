import React from "react";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modale active" : "modale"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modalContent active" : "modalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
