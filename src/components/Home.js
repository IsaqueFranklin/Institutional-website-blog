import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Helmet} from "react-helmet";

const seo = {
    title: 'Arca Perícia Contábil',
    description: 'Existimos por um propósito: solucionar conflitos através dos números. Acreditamos na Justiça e contribuímos para que ela seja feita. Nosso objetivo é auxiliar nossos clientes em suas demandas judiciais de maneira clara e precisa.',
    url: '',
    image: 'https://arca-pericia.firebaseapp.com/img/aboutimg.png',
}


function Home() {
    return (
        <>
        <Helmet
            title={`${seo.title}`}
            meta={[
                { name: 'description', property: 'og:description', content: seo.description },
                { property: 'og:title', content: `${seo.title}` },
                { property: 'og:url', content: seo.url },
                { property: 'og:image', content: seo.image },
                { property: 'og:image:type', content: 'image/jpeg' },
                { property: 'twitter:image:src', content: seo.image },
                { property: 'twitter:title', content: `${seo.title}` },
                { property: 'twitter:description', content: seo.description },
        ]} />
            <div className="frontbanner">
                <div className="frontWords">
                <h1 className="titulo">Arca Perícia</h1>
                <h4 className="paragraph">O seu cálculo está aqui</h4>
                <br></br>
                <a href="/blog"><button>Blog</button></a>
                <a href="/orçamento"><button>Orçamento</button></a>
                <div style={{marginTop: 20, justifyContent:'space-between', alignItems: 'center'}}>
                    <img style={{margin: 10, width: 30, height: 30}} className="logo" src="img/instagram.png" alt="instagram img"/>
                    <img style={{margin: 10, width: 30, height: 30}} className="logo" src="img/facebook.png" alt="facebook img"/>
                    <img style={{margin: 10, width: 30, height: 30}} className="logo" src="img/whatsapp.png" alt="whatsapp img"/>
                    <img style={{margin: 10, width: 30, height: 30}} className="logo" src="img/email.png" alt="email img" />
                </div>
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
                <Container>
                <br></br>
                <br></br>
                <h2 className="titulo3">O que fazemos?</h2>
                <br></br>
                <br></br>
                    <Row>
                        <Col>
                            <img src="img/work.png" alt="trabalhista" />
                            <p className="paragraph3">Perícia Trabalhista</p>
                        </Col>
                        <Col>
                            <img src="img/money.png" alt="financeira" />
                            <p className="paragraph3">Perícia Cível e Financeira</p>
                        </Col>
                        <Col>
                            <img src="img/veio.png" alt="previdenciária" />
                            <p className="paragraph3">Perícia Previdenciária</p>
                        </Col>
                        <Col>
                            <img src="img/course.png" alt="cursos" />
                            <p className="paragraph3">Cursos</p>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <a href="/orçamento"><button style={{ backgroundColor: "#fff", color: "#430419" }}>Fazer Orçamento</button></a>
                    <br></br>
                    <br></br>
                </Container>
            </div>
            <div className="course">
                    <br></br>
                    <br></br>
                    <h4 className="titulo3">Nós temos um curso de perícia</h4>
                    <p className="paragraph3">Um curso de perícia para interessados em aprender a trabalhar com perícia contábil.</p>
                    <a href=""><button>Ver curso</button></a>
            </div>
            <div className="money">
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2 className="titulo2">Tem interesse em nosso trabalho?</h2>
                    <img src="img/budget.png" alt="orçamento" className="homeimgs" />
                    <p className="paragraph2" style={{ textAlign: 'center'}}>Faça seu orçamento agora com nossa ferramenta gratuita e receba o retorno no mesmo dia.</p>
                    <a href="/orçamento"><button>Fazer Orçamento</button></a>
                    <br></br>
                    <br></br>
                    <br></br>
            </div>
        </>
    )
}

export default Home
