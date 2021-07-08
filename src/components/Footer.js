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
                        <li><small>Instagram</small></li>
                        <li><small>Facebook</small></li>
                        <li><small>Email</small></li>
                        <li><small>Whatsapp</small></li>
                        <br></br>
                    </ul>
                </Col>
                <Col sm>
                    <ul>
                        <h4>Links</h4>
                        <li><small>Cursos</small></li>
                        <li><small>Blog</small></li>
                        <li><small>Contato</small></li>
                        <li><small>Orçamento</small></li>
                        <br></br>
                    </ul>
                </Col>
                <Col sm>
                    <ul>
                        <h4>Perícias</h4>
                        <li><small>Contábil Trabalhista</small></li>
                        <li><small>Cível e Financeira</small></li>
                        <li><small>Contábil Previdenciária</small></li>
                        <li><small>Orçamento</small></li>
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
