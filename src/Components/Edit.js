import React, { Component } from "react";
import axios from 'axios'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: 0,
      image: ''
    }
  }
  updateProduct = id => {
      axios
        .put(`/api/inventory/${this.props.match.params.id}`, {
          name: this.state.name,
          price: this.state.price,
          image: this.state.image
        })
        .then(() => {
          this.setState({
            image: "",
            price: 0,
            name: ""
          });
          this.props.history.push('/')
        })
        .catch(err => console.log(err));
    };

  componentDidMount() {
    axios.get(`/api/product/${this.props.match.params.id}`)
    .then(res => this.setState({
      name: res.data[0].name,
      price: res.data[0].price,
      image: res.data[0].image
    }))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.placeholder]: e.target.value
    })
  }

  render() {
    console.log(this.props)
      // console.log(this.props.selectedItem)
      // console.log(this.state.name)
    return (
      <div className="body">
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
              value={this.state.image}
              className="input"
              //   value={this.props.product.image}
              placeholder="image"
              onChange={e => this.handleChange(e)}
            />{" "}
            <br />
            <p>Product Name:</p>
            <input
              value={this.state.name}
              className="input"
              //   value={this.props.product.name}
              placeholder="name"
              onChange={e => this.handleChange(e)}
            />{" "}
            <br />
            <p>Price:</p>
            <input
              value={this.state.price}
              className="input"
                // value={this.props.product.price}
              placeholder="price"
              onChange={e => this.handleChange(e)}
            />{" "}
            <br />
          </div>
          <button onClick={this.updateProduct}>Edit product</button>
        </div>
      </div>
    );
  }
}

export default Edit;
