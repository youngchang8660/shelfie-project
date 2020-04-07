import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  

  componentDidMount() {
    this.props.getProducts();
  }


  deleteProduct = id => {
    axios
      .delete(`/api/inventory/${id}`)
      .then(() => {
        this.props.getProducts();
      })
      .catch(err => console.log(err));
  };



  render() {
    console.log(this.props.props)
    const mappedInventory = this.props.inventory.map((element, i) => {
      return (
        <Product
          deleteProduct={this.deleteProduct}
          inventory={this.props.inventory}
          key={i}
          product={element}
          // takeToEditComponent={this.takeToEditComponent}
          props={this.props.props}
        />
      );
    });

    return (
      <div className="body">
        <div className="dashboard-body">{mappedInventory}</div>
      </div>

      // <div className='body'>
      //   {this.props.props.location.pathname==='/' ? 
      // (<div className='dashboard-body'>{mappedInventory}</div>)
      // : (<div>
      //   <Edit product={this.mappedInventory.element} />
      // </div>) 
      // }
      // </div>
    );
  }
}

export default Dashboard;
