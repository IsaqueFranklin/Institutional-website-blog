import React from 'react'
import { Container } from 'react-bootstrap'


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
                <h1>Sobre nós</h1>
            </div>
        </>
    )
}

export default Home
