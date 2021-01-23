import React, { Component } from "react";
import CardComponent from "./Components/CardComponent.js";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <CardComponent />
        </div>
      </div>
    );
  }
}

export default App;
