import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from "./components/SecondsCounter.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

let seconds = 0;

root.render(<SecondsCounter seconds={seconds} />);

setInterval(() => {
  seconds += 1;
  root.render(<SecondsCounter seconds={seconds} />);
}, 1000);
