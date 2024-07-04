import React from 'react'
import { Link } from 'react-router-dom'
import {Menu} from './Menu';
import {Component} from "react";
import "./NavbarStyles.css";
 class Navbar extends Component{
  state={clicked: false};
  handleClick=()=>{
    this.setState({clicked: !this.state.clicked})
  };
    render(){ 
  return (
    <nav className='Nav'>
        <h1
        className="navbar-logo">PHOTO GALLERY</h1>
          <ul className="nav-menu">
            {Menu.map((item,index)=>{
                return (
            <li key={index} >
                <Link className=
                {item.cName}to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
                </li>   
            );
           })}
           <button>Log out</button>
          </ul>
        </nav> 
    );
  }
}
export default Navbar;
