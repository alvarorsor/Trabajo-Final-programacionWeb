import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"

import bootstrap from 'bootstrap'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


import App from "./App.js"



ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById("root")
)