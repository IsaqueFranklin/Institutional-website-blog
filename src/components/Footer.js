import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

function Footer() {
    return (
        <div className="footer">
            <br></br>
            <Container>
            <Row>
                <Col sm>
                    <ul>
                        <h4>Redes sociais</h4>
                        <li><small><a href="">Instagram</a></small></li>
                        <li><small><a href="">Facebook</a></small></li>
                        <li><small><a href="">Email</a></small></li>
                        <li><small><a href="">Whatsapp</a></small></li>
                        <br></br>
                    </ul>
                </Col>
                <Col sm>
                    <ul>
                        <h4>Links</h4>
                        <li><small><a href="">Cursos</a></small></li>
                        <li><small><a href="/blog">Blog</a></small></li>
                        <li><small><a href="/contato">Contato</a></small></li>
                        <li><small><a href="/orçamento">Orçamento</a></small></li>
                        <br></br>
                    </ul>
                </Col>
                <Col sm>
                    <ul>
                        <h4>Perícias</h4>
                        <li><small><a href="/serviços">Contábil Trabalhista</a></small></li>
                        <li><small><a href="/serviços">Cível e Financeira</a></small></li>
                        <li><small><a href="/serviços">Contábil Previdenciária</a></small></li>
                        <li><small><a href="/orçamento">Orçamento</a></small></li>
                        <br></br>
                    </ul>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <p className="center">&copy; Arca Perícia 2021</p>
            </Container>
        </div>
    )
}

export default Footer
