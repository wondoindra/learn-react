import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/navbar/Navbar";
import Navigation from "./components/navbar/Navbar";
import Header from "./components/jumbotron/Jumbotron";
import CardContent from "./components/card/Card";
import CarouselHeader from "./components/carousel/Carousel";
import JumboContent from "./components/jumbotron/Jumbotron";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <CarouselHeader />
        <JumboContent />
        <CardContent />
      </div>
    );
  }
}

export default App;
