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
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Email</li>
                        <li>Whatsapp</li>
                    </ul>
                </Col>
                <Col sm>
                    <ul>
                        <h4>Links</h4>
                        <li>Curso</li>
                        <li>Blog</li>
                        <li>Contato</li>
                        <li>Fazer orçamento</li>
                    </ul>
                </Col>
                <Col sm>
                    <ul>
                        <h4>Perícias</h4>
                        <li>Contábil Trabalhista</li>
                        <li>Cível e Financeira</li>
                        <li>Contábil Previdenciária</li>
                        <li>Fazer orçamento</li>
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
