import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import FirebaseContext from '../firebase/context'
import { Container } from 'react-bootstrap'
import Post from './Post'


function ReadPost(props) {

    const { firebase, user } = useContext(FirebaseContext)
    const [post, setPost] = useState(null)
    const [content, setContent] = useState("")
    const postId = props.match.params.postId
    const postRef = firebase.db.collection('posts').doc(postId)

    useEffect(() => {
        getPost();
    })

    function getPost() {
        postRef.get().then(doc => {
            setPost({...doc.data(), id: doc.id})
        })
    }


    return !post ? (
        <div>Loading...</div>
    ) : (
        <Container>
            <Post post={post} />
        </Container>
    )
}

export default ReadPost
