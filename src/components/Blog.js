import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../firebase/context'
import PostContainer from './PostContainer'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'


function Blog(props) {

    const { firebase } = useContext(FirebaseContext)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const isTopPage = props.location.pathname.includes('blog');

    useEffect(() => {
        getLinks();
    }, [isTopPage])

    function getLinks() {
        return firebase.db
        .collection('posts')
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


    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Blogme</title>
            <meta name="description" content="Start your blog today and free your toughts."></meta>
        </Helmet>
        <Container>
            <div style={{ opacity: loading ? 0.25 : 1}} className="fundo2">
                {/* renderLinks() ao invés de usar links */}
                {posts.map((post) => (
                    <PostContainer key={post.id} showCount={true} post={post} />
                ))}
                <br></br>
                <br></br>
            </div>
        </Container>
        </>
    )
}

export default Blog