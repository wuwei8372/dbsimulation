import React, { Component } from 'react';
import '../Assets/css/Navbar.css';


class Navbar extends Component {
  render() {
    return (
       <ul className='Navbar'>
		  <li><a href="#">Simulation</a></li>
		  <li><a href="#">Calculator</a></li>
		  <li><a href="#">CoIP Analysis</a></li>
		</ul> 
    );
  }
}

export default Navbar;