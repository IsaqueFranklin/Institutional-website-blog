import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Helmet} from "react-helmet";

const seo = {
    title: 'Contatos Arca Perícia',
    description: 'Entre em contato conosco para fazer seu orçamento personalizado!',
    url: '',
    image: 'https://arca-pericia.firebaseapp.com/img/contato.png',
}


function Contato() {
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
        <div className="contact">
            <br></br>
            <br></br>
            <h3 className="titulo2">Entre em contato</h3>
            <hr></hr>
            <img src="img/contato.png" alt="imagem de contato" className="homeimgs" />
            <p className="paragraph2">Entre em contato conosco agora mesmo por um dos meios abaixo ou das nossa redes sociais.</p>
            <br></br>
            <a href=""><button>Enviar Whatsapp</button></a>
            <a href="mailto:"><button>Enviar email</button></a> 
            <br></br>
            <br></br>
        </div>
        </>
    )
}

export default Contato
