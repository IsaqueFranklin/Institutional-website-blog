import React from 'react'
import { withRouter } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import { FirebaseContext } from '../firebase'
import '../styles/header.css'

function Header() {

    const {user, firebase} = React.useContext(FirebaseContext)

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{backgroundColor: "#430419", color: "#fff",}}>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/contato">Contato</Nav.Link>
                    <Nav.Link href="/serviços">Serviços</Nav.Link>
                    {user && (
                        <>
                        <NavDropdown title='perfil' id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => firebase.logout()}>Sair</NavDropdown.Item>
                            <NavDropdown.Item href='/create'>Criar post</NavDropdown.Item>
                        </NavDropdown>
                        </>
                    )}
                </Nav>
                <Nav className="socialIcons">
                    <Nav.Link href=""><img className="logo" src="img/instagram.png" alt="instagram img"/></Nav.Link>
                    <Nav.Link href=""><img className="logo" src="img/facebook.png" alt="facebook img"/></Nav.Link>
                    <Nav.Link href=""><img className="logo" src="img/whatsapp.png" alt="whatsapp img"/></Nav.Link>
                    <Nav.Link href=""><img className="logo" src="img/email.png" alt="email img" /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);