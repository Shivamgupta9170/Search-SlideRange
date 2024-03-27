import React, { Component } from "react";
import Search from "./search";
import Card from "./card";
import Slider from "./slider";

class App extends Component {
  state = {
    data: [
      { name: "OnePLus 7T", price: "25000" },
      { name: "OnePlus 8T", price: "30000" },
      { name: "samsung galaxy", price: "40000" },
      { name: "samsung galaxy pro", price: "40000" },
      { name: "iphone 11", price: "60000" },
      { name: "iphone 12", price: "80000" },
    ],
    filter: [
      { name: "OnePLus 7T", price: "25000" },
      { name: "OnePlus 8T", price: "30000" },
      { name: "samsung galaxy", price: "40000" },
      { name: "samsung galaxy pro", price: "40000" },
      { name: "iphone 11", price: "60000" },
      { name: "iphone 12", price: "80000" },
    ],
  };
  onSearch(value) {
    let x = this.state.data.filter(function (item) {
      return item.name.toLowerCase().includes(value);
    });

    this.setState({ data: this.state.data, filter: x });
  }
  onSlide(value) {
    let x = this.state.data.filter(function (item) {
      return item.price <= value;
    });
    this.setState({ data: this.state.data, filter: x });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <div className="row">
              <div className="col-12">
                <Search onSearch={this.onSearch.bind(this)}></Search>
              </div>
              <div className="col-12">
                <Slider onSlide={this.onSlide.bind(this)}></Slider>
              </div>
            </div>
          </div>
          <div className="col-10">
            <div className="row">
              {this.state.filter.map((item, key) => (
                <div className="col-4 mt-5" key={key}>
                  <Card name={item.name} price={item.price} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
