import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

function Footer() {
    return (
        <div className="footer">
            <br></br>
            <Container>
            <Row>
                <Col>
                    <ul>
                        <h4>Redes sociais</h4>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Email</li>
                        <li>Whatsapp</li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <h4>Links</h4>
                        <li>Curso</li>
                        <li>Blog</li>
                        <li>Contato</li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <h4>Serviços</h4>
                        <li>serviço 1</li>
                        <li>serviço 2</li>
                        <li>serviço 3</li>
                        <li>Fazer orçamento</li>
                    </ul>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <p>Arca Perícia &copy 2021</p>
            <br></br>
            </Container>
        </div>
    )
}

export default Footer
