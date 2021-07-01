import React from 'react'
import { withRouter } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import { FirebaseContext } from '../firebase'
import '../styles/header.css'

function Header() {

    const {user, firebase} = React.useContext(FirebaseContext)

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{backgroundColor: "#4d0026", color: "#fff"}}>
            <Navbar.Brand href="/">Arca Perícia</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/blog">Blog</Nav.Link>
                <NavDropdown title="Serviços" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                    <NavDropdown.Item href="">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="/contato">Contato</Nav.Link>
                {user && (
                    <>
                    <Nav.Link>{user.displayName}</Nav.Link>
                    <Nav.Link href='/create'>Criar post</Nav.Link>
                    </>
                )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);