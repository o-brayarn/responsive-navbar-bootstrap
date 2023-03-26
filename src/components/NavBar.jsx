import React from 'react'
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

export default function NavBar() {
    const menuData = [
        {
            path: '/about',
            name: "ABOUT"
        },
       
        {
            path: '/services',
            name: "SERVICES"
        },
         {
            path: '/skills',
            name: "SKILLS"
        },
        {
            path: '/experience',
            name: "EXPERIENCE"
        },
         {
            path: '/contact',
            name: "PROJECTS"
        },
         {
            path: '/contact',
            name: "CONTACT"
        }
    ]
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand className="brand" href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-grow-1 justify-content-evenly">
           { menuData.map((item)=>(
               <NavLink to={item.path} key={item.name} >
                   <div className="list-item">{item.name}</div>
               </NavLink>
           ))
            }
                  </Nav>
                  {/* <Nav className='me-auto'></Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
