import React from "react";

const DigitCounter = ({ tiempo }) => {
  return (
    <div className="p-4 bg-dark text-white rounded-2 fs-3 text-center m-1">
      {tiempo}
    </div>
  );
};

const SecondsCounter = (props) => {
  return (
   <div className="container d-flex justify-content-center align-items-center vh-100" style={{ background: "transparent" }}>

      {/* ícono del reloj */}
      <div className="p-4 bg-dark text-white rounded-2 text-center">
        <i className="fa-solid fa-clock fa-3x"></i>
      </div>

       <DigitCounter tiempo={Math.floor((props.seconds / 100000) % 10)} />
      <DigitCounter tiempo={Math.floor((props.seconds / 10000) % 10)} />
      <DigitCounter tiempo={Math.floor((props.seconds / 1000) % 10)} />
      <DigitCounter tiempo={Math.floor((props.seconds / 100) % 10)} />
      <DigitCounter tiempo={Math.floor((props.seconds / 10) % 10)} />
      <DigitCounter tiempo={Math.floor(props.seconds % 10)} />
    </div>
  );
};


export default SecondsCounter;