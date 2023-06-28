import React from 'react';
import { Outlet, Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbar_elements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/SIGN_in' activeStyle>
            Personal information
          </NavLink>
          <NavLink to='/Academic_info' activeStyle>
            Academic information
          </NavLink>
          <NavLink to='/Skills' activeStyle>
            Skills
          </NavLink>
         
          <NavLink to='/my_resume' activeStyle>
            Awards
          </NavLink>

          <NavLink to='/others' activeStyle>
            Others
          </NavLink>
  
  
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/my_resume1'>Download</NavBtnLink>
        </NavBtn>
      </Nav>
      <Outlet/>
    </>
  );
};
  
export default Navbar;