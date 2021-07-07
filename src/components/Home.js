import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function Home() {
    return (
        <>
            <div className="frontbanner">
                <div className="frontWords">
                <h1 className="titulo">Arca Perícia</h1>
                <h4 className="paragraph">O seu cálculo está aqui</h4>
                <br></br>
                <button>Blog</button>
                <button>Orçamento</button>
                </div>
            </div>
            <div className="about">
                <Container>
                <Row>
                    <Col sm className="colitem">
                        <img className="homeimgs" src="img/aboutimg.png" alt="about image"/>
                    </Col>
                    <Col sm className="colitem">
                        <br></br>
                        <h2 className="titulo2">Propósito</h2>
                        <br></br>
                        <p className="paragraph2">Existimos por um propósito: solucionar conflitos através dos números. Acreditamos na Justiça e contribuímos para que ela seja feita. Nosso objetivo é auxiliar nossos clientes em suas demandas judiciais de maneira clara e precisa.</p>
                        <br></br>
                        <a href=""><button>Saber mais</button></a>
                    </Col>
                </Row>
                </Container>
            </div>
            <div className="services">

            </div>
            <div className="course">

            </div>
            <div className="money">

            </div>
        </>
    )
}

export default Home
