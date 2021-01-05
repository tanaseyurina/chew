import React, { Component } from "react";
import MediaQuery from "react-responsive";

import "./App.css";

import Navbar from "./Components/Bars/Navbar";
import Endbar from './Components/Bars/Endbar';

import Pasta from "./Components/Cookings/Pasta";
import Rice from './Components/Cookings/Rice';
import Okazu from './Components/Cookings/Okazu';
import Meat from './Components/Cookings/Meat';
import Contact from './Components/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Pasta
          title="パスタ"
          id="pasta"/>
        <Rice
          title="おこめ"
          id="rice"
        />
        <Okazu
          title="おかず"
          id="okazu"
        />
        <Meat
          title="おにく"
          id="meat"
        />
        <Contact
          title="Contact"
          id="contact"
        />
        <Endbar />
      </div>
    );
  }
}

export default App;
