import * as React from "react";
import * as ReactDOM from "react-dom";
import {Header} from "../shared/Header";

window.onload = () => {
ReactDOM.hydrate(<Header/>, document.getElementById('react-root'))
}
