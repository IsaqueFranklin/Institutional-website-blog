import React, { useContext, useState } from 'react'
import useFormValidation from '../authentication/useFormValidation'
import validateOrçamento from '../authentication/validateOrçamento'
import FirebaseContext from '../firebase/context'
import { Form, Container } from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Helmet } from "react-helmet";


const INITIAL_STATE = {
    email: "",
    nome: "",
    telefone: "",
    description: ""
}


function Orçamento(props) {

    const { firebase, user } = useContext(FirebaseContext)

    const { handleSubmit, handleChange, values, errors } = useFormValidation(INITIAL_STATE, validateOrçamento, handleCreatePost)
    const [description, setDescription] = useState("")
    const [text, setText] = useState("")


    function handleCreatePost() {
        if (false) {
            props.history.push('/login')
        } else {
            const { email, nome, telefone } = values
            const newPost = {
                email,
                nome,
                telefone,
                description: description,
                respondido: false,
                created: Date.now()
            }
            firebase.db.collection('orçamentos').add(newPost)
            props.history.push('/')
        }
    }


    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Orçamento</title>
                <meta name="description" content="In the process of creating a post."></meta>
            </Helmet>
            <br></br>
            <br></br>
            <h2 className="titulo2">Escreva os detalhes do seu pedido de orçamento</h2>
            <br></br>
            <Form onSubmit={handleCreatePost} className="flex flex-column">

                <Form.Group id="nome">
                    <Form.Label>Seu nome</Form.Label>
                    <Form.Control
                    onChange={handleChange}
                    values={values.nome}
                    name="nome"
                    placeholder="seu nome"
                    autoComplete="off"
                    type="text"
                    className={errors.nome && 'error-input'} />
                </Form.Group>
                {errors.nome && <p className="error-text">{errors.nome}</p>}
                <br></br>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    onChange={handleChange}
                    values={values.email}
                    name="email"
                    placeholder="seu email"
                    autoComplete="off"
                    type="email"
                    className={errors.email && 'error-input'} />
                </Form.Group>
                {errors.email && <p className="error-text">{errors.email}</p>}
                <br></br>
                <Form.Group id="telefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                    onChange={handleChange}
                    values={values.telefone}
                    name="telefone"
                    placeholder="seu telefone"
                    autoComplete="off"
                    type="phone"
                    className={errors.telefone && 'error-input'} />
                </Form.Group>
                {errors.telefone && <p className="error-text">{errors.telefone}</p>}
                <br></br>
                <Form.Group id="description">
                    <Form.Label>Descrição do serviço</Form.Label>
                    <CKEditor
                    style={{ height: 400, }}
                    className=""
                    editor={ ClassicEditor }
                    data={description}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setDescription(data);
                    }}
                    />
                </Form.Group>
                {errors.description && <p className="error-text">{errors.description}</p>}
                <br></br>
                <button className="" type="submit">
                    Publicar
                </button>
                <br></br>
                <br></br>
                <h5>{text}</h5>
                <br></br>
                <br></br>
            </Form>
        </Container>
    )
}

export default Orçamento