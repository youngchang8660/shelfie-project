import React, { Component } from "react";
import Dashboard from "./Components/Dashboard";
// import Product from './Components/Product'
import Form from "./Components/Form";
import Header from "./Components/Header";
import "./App.css";
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import routes from './routes'


class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

  getProducts = () => {
    axios
      .get("/api/inventory")
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log(err));
  };
  

  render() {
    // console.log(this.state.inventory)
    console.log(this.props)
    return (
      <div className="App">
        <Header />
        {this.props.location.pathname==='/' ? 
      (<div><Dashboard getProducts={this.getProducts} inventory={this.state.inventory} props={this.props}/></div>)
      : (<div>
        {this.props.location.pathname==='/add' ?
        (<div><Form getProducts={this.getProducts} props={this.props} /></div>)
      : (
        <div>{routes}</div>
      )
      }
      </div>) 
      }
       </div>
    )
  }
}

export default withRouter(App)