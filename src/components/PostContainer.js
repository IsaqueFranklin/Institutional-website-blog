import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import FirebaseContext from '../firebase/context'
import { Card, Container, Row, Col } from 'react-bootstrap'


function PostContainer({ post, showCount, history }) {
    
    const { firebase, user } = useContext(FirebaseContext)
    

    function handleDeletePost() {
        const linkRef = firebase.db.collection('posts').doc(post.id)
        linkRef.delete().then(() => {
            console.log(`O documento com ID ${post.id} foi deletado.`)
        })
    }

    const postedByAuthUser = user && user.uid === post.postedBy.id

    return (
        <Container className="">
            <Card className="cardposts left alig">
            <Row>
            <Col md="auto">
                <img src={post.thumbImg} className="ig" />
            </Col>
            <Col md="auto">
                <Card.Body className="">
                <div className="">
                    <div className="left">
                            <div className="">
                                <h5 className="title">{post.title}</h5>{" "}
                                <small>by {post.postedBy.name}</small>{" | "}
        
                           
                                {" "}<Link to={`/post/${post.id}`} className="">
                                    <button style={{ padding: 8 }}>Read now</button>
                                </Link>
                                {postedByAuthUser && (
                                    <>
                                    {" "}
                                    <span className="delete" onClick={handleDeletePost}>
                                        Delete
                                    </span>
                                    {" | "}
                                    <Link to={`/update/${post.id}`}>
                                        Update
                                    </Link>
                                    </>
                                )}
                            </div>
                    </div>
                </div>
                </Card.Body>
            </Col>
        </Row>
        </Card>
    </Container>
    )
}

export default withRouter(PostContainer)
