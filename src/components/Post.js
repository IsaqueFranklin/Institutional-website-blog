import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import FirebaseContext from '../firebase/context'
import { Container, Card } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import distanceInWordsToNow from 'date-fns/formatDistanceToNow'
import format from 'date-fns/format'


function Post({ post, showCount, history }) {

    const { firebase, user } = useContext(FirebaseContext)

    return (
        <div>
            <Container className="cont">
            <Helmet title={post.title} url={post.thumbImg} image={post.thumbImg} description={post.title}>
                <meta charSet="utf-8" />
                <title>{post.title}</title>
                <meta name="description" content={`${post.title}, this is a post by ${post.postedBy.name}, enjoy and come back for more :)`} />

                <meta itemprop="name" content="Blogme" />
                <meta itemprop="description" content={`${post.title}, this is a post by ${post.postedBy.name}, enjoy and come back for more :)`} />
                <meta itemprop="image" content={post.thumbImg} />

                <meta property="og:url" content={post.thumbImg} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={`${post.title}, this is a post by ${post.postedBy.name}, enjoy and come back for more :)`} />
                <meta property="og:image" content={post.thumbImg} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={`${post.title}, this is a post by ${post.postedBy.name}, enjoy and come back for more :)`} />
                <meta name="twitter:image" content={post.thumbImg} />
            </Helmet>
            <div className="links">
                <br></br>
                <p>Published {distanceInWordsToNow(post.created)} ago at {format(post.created, 'dd/MM/yyyy')}</p>
                <h3>{post.title}</h3>
                <br></br>
                <p>By <Link to={`/${post.postedBy.email}`}>@{post.postedBy.name}</Link></p>
                <img src={post.thumbImg} alt="" />
                <br></br>
                <br></br>
            </div>
            <hr></hr>
            <div className="links" dangerouslySetInnerHTML={{ __html: post.content }} />
            <br></br>
            <Card className="homecard links" style={{ backgroundColor: '#091116', color: '#fff'}}>
                <Card.Body>
                    <p>Wanna see more posts from @{post.postedBy.name}?</p>
                    <Link to={`/${post.postedBy.email}`}><button style={{ backgroundColor: '#fff', color: '#091116'}}>See more posts</button></Link>
                </Card.Body>
            </Card>
        </Container>
        </div>
    )
}

export default Post
