import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      image: "",
      idOfSelectedProduct: null
    };
  }


  handleChange = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  };

  handleClear = () => {
    this.setState({
      image: "",
      price: 0,
      name: ""
    });
  };

  createProducts = () => {
    axios
      .post("/api/inventory", {
        name: this.state.name,
        price: this.state.price,
        image: this.state.image
      })
      .then(() => {
        this.props.getProducts();
        this.setState({
          image: "",
          price: 0,
          name: ""
        });
        this.props.props.history.push('/')
      })
      .catch(err => console.log(err));
  };

  render() {
    //   console.log(this.props)
    // console.log(this.props.props.location.pathname)
    // console.log('function', this.props.getProducts)
    return (
      <div className='body'>
        <div className="input-box">
          <div>
            <img
              className="product-image"
              width="200"
              height="200"
              alt="productImage"
              src={this.state.image}
            />
          </div>
          <div>
            <p>Image URL:</p>
            <input
              className="input"
              value={this.state.image}
              placeholder="image"
              onChange={e => this.handleChange(e)}
            />{" "}
            <br />
            <p>Product Name:</p>
            <input
              className="input"
              value={this.state.name}
              placeholder="name"
              onChange={e => this.handleChange(e)}
            />{" "}
            <br />
            <p>Price:</p>
            <input
              className="input"
              value={this.state.price}
              placeholder="price"
              onChange={e => this.handleChange(e)}
            />{" "}
            <br />
          </div>
          <div className="cancel-add-button">
            <button className="cancel-button" onClick={this.handleClear}>
              Cancel
            </button>
            <button className="add-button" onClick={this.createProducts}>
              Add to inventory
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
