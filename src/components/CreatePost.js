import React, { useContext, useState } from 'react'
import useFormValidation from '../authentication/useFormValidation'
import validateCreatePost from '../authentication/validateCreatePost'
import FirebaseContext from '../firebase/context'
import { Form, Container } from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Helmet } from "react-helmet";


const INITIAL_STATE = {
    content: "",
    title: "",
    thumbImg: ""
}


function CreatePost(props) {

    const { firebase, user } = useContext(FirebaseContext)

    const { handleSubmit, handleChange, values, errors } = useFormValidation(INITIAL_STATE, validateCreatePost, handleCreatePost)
    const [content, setContent] = useState("")


    function handleCreatePost() {
        if (!user) {
            props.history.push('/login')
        } else {
            const { title, thumbImg } = values
            const newPost = {
                title,
                content: content,
                thumbImg,
                postedBy: {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email
                },
                voteCount: 0,
                votes: [],
                comments: [],
                created: Date.now()
            }
            firebase.db.collection('posts').add(newPost)
            props.history.push('/painel')
        }
    }


    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Create</title>
                <meta name="description" content="In the process of creating a post."></meta>
            </Helmet>
            <br></br>
            <br></br>
            <h2 className="titulo">Publishing your post</h2>
            <br></br>
            <Form onSubmit={handleCreatePost} className="flex flex-column">

                <Form.Group id="Post">
                    <Form.Label>Title of the post</Form.Label>
                    <Form.Control
                    onChange={handleChange}
                    values={values.title}
                    name="title"
                    placeholder="title"
                    autoComplete="off"
                    type="text"
                    className={errors.title && 'error-input'} />
                </Form.Group>
                {errors.title && <p className="error-text">{errors.title}</p>}
                <br></br>
                <Form.Group id="thumb">
                    <Form.Label>Post Thumb Url</Form.Label>
                    <Form.Control
                    onChange={handleChange}
                    values={values.thumbImg}
                    name="thumbImg"
                    placeholder="Post image Url"
                    autoComplete="off"
                    type="text"
                    className={errors.thumbImg && 'error-input'} />
                </Form.Group>
                {errors.thumbImg && <p className="error-text">{errors.thumbImg}</p>}
                <br></br>
                <Form.Group id="content">
                    <Form.Label>Content</Form.Label>
                    <CKEditor
                    style={{ height: 400, }}
                    className=""
                    editor={ ClassicEditor }
                    data={content}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setContent(data);
                    }}
                    />
                </Form.Group>
                {errors.content && <p className="error-text">{errors.content}</p>}
                <br></br>
                <button className="" type="submit">
                    Publish
                </button>
            </Form>
        </Container>
    )
}

export default CreatePost
