import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import logService from "./services/logService";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

logService.init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
