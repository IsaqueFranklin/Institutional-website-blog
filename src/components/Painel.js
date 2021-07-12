import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../firebase/context'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

function Painel(props) {

    const { firebase } = useContext(FirebaseContext)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const isTopPage = props.location.pathname.includes('painel');

    useEffect(() => {
        getBudgets()
    }, [isTopPage])

    function getBudgets() {
        return firebase.db
        .collection('orçamentos')
        .orderBy('created', 'desc')
        .onSnapshot(handleSnapshot)
    }

    function handleSnapshot(snapshot) {
        const links = snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })
        setPosts(links)
        setLoading(false)
    }

    function respondido(post){
        firebase.db.collection('orçamentos').doc(post).update({
            respondido: '1'
        })
    }

    function deleteLink(post){
        firebase.db.collection('orçamentos').doc(post).delete()
    }

    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Painel</title>
        </Helmet>
        <Container>
            <div style={{ opacity: loading ? 0.25 : 1}} className="fundo2">
                <br></br>
                <a href="create"><button>Criar novo post</button></a>
                <br></br>
                <br></br>
                <br></br>
                <h3 className="titulo2">Orçamentos requisitados aguardando retorno:</h3>
                {posts.map((post) => (
                    <Card style={{ marginTop: '50px', marginBottom: '20px', borderRadius: '20px'}}>
                        <Card.Body>
                        <small>Nome:</small><h6 className="paragraph2">{post.nome}</h6>
                        <small>Telefone:</small><p className="paragraph2">{post.telefone}</p>
                        <small>Email:</small><p className="paragraph2">{post.email}</p>
                        <small>Descrição:</small><div dangerouslySetInnerHTML={{ __html: post.description }} />
                        {post.respondido == '0' ? (
                        <>
                        <button onClick={respondido(post.id)}>Marcar como respondido</button>
                        </>
                        ) : (
                        <>
                        <p className="paragraph2">Já foi respondido.</p>
                        <button onClick={deleteLink(post.id)}>Excluir</button>
                        </>
                        )}
                        </Card.Body>
                    </Card>
                ))}
                <br></br>
                <br></br>
            </div>
        </Container>
        </>
    )
}

export default Painel
