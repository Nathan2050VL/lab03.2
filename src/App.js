import React, { Component } from 'react';
import './App.css';
import { DISHES } from './shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/Menucomponent'
import logo from './logo.svg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
          
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
