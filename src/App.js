import "./styles.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// apiKey= 07662554fbbe4f80ae97023b4c5cd8d7
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <News />
      </div>
    );
  }
}
