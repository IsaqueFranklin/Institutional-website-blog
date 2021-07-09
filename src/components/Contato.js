import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function Contato() {
    return (
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
    )
}

export default Contato
