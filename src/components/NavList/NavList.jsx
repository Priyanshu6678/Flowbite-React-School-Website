import React from 'react';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Logo from './logo.png';


function NavList() {
  return (
    <div className="z-50">
      <Navbar fluid rounded>
        <NavbarBrand href="https://flowbite-react.com">
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span id="nav_heading" className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Delhi Public School</span>
        </NavbarBrand>
        <div className="flex space-x-2 md:order-2">
          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink as={NavLink} to="/" href="#" activeClassName="active"> {/* Fixed typo in activeClassName */}
            Home
          </NavbarLink>
          <NavbarLink as={NavLink} to="/about" href="#" activeClassName="active">
            About
          </NavbarLink>
          <NavbarLink as={NavLink} to="/academics" href="#" activeClassName="active">
            Academics
          </NavbarLink>
          <NavbarLink as={NavLink} to="/gallery" href="#" activeClassName="active">
            Gallery
          </NavbarLink>
          <NavbarLink as={NavLink} to="/contact" href="#" activeClassName="active">
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}

export default NavList;
