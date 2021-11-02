import React from "react";

const ScrollToTop = () => {
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className="waves-effect  orange  darken-1 btn scrollBtn"
      onClick={ScrollTop}
    >
      <p style={{ fontSize: "16px" }}>UP</p>
      <i className="material-icons orange darken-1 large ">arrow_upward</i>
    </button>
  );
};

export default ScrollToTop;
