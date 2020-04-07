import React, { Component } from "react";
import Edit from "./Edit";

class Product extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                selectedItem: {}
            }
    }

    // editHandler = () => {
    //     this.setState
    // }

    editHandler = () => {
        this.props.props.history.push(`/edit/${this.props.product.product_id}`)
      }

    

  render() {
    console.log(this.props.product)
    // console.log(this.state.selectedItemPrice)
    console.log(this.props.props)
    return (
      <div className="App">
        {this.props.props.location.pathname === "/" ? (
          <div>
            <div className="dashboard">
              <img
                width="250"
                height="250"
                alt="product"
                src={this.props.product.image}
              />
              <div className="name-and-price">
                <h3>{this.props.product.name}</h3>
                <h4>${this.props.product.price}</h4>
                <div className="buttons">
                  <button
                    className="delete-button"
                    onClick={() =>
                      this.props.deleteProduct(this.props.product.product_id)
                    }
                  >
                    Delete
                  </button>
                  <button
                    className="edit-button"
                    onClick={this.editHandler}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Edit props={this.props.props} selectedItem={this.props.product} />
          </div>
        )}
      </div>
    );
  }
}

export default Product;
