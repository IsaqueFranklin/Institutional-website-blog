export default function validateCreateLink(values) {
    let errors = {}

    //nome errors
    if(!values.nome) {
        errors.nome = "Description required"
    } else if (!values.nome || values.nome.length < 10) {
        errors.nome = "Description must be at least 10 characters"
    }
    //telefone errors
    if(!values.telefone) {
        errors.telefone = "Title required"
    } else if (!values.telefone || values.telefone.length < 3) {
        errors.telefone = "Title must be at least 3 characters"
    }
    //email errors
    if(!values.email) {
        errors.email = "Email necessário"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email inválido"
    }
    //description errors
    if(!values.description) {
        errors.description = "Description required"
    } else if (!values.description || values.description.length < 10) {
        errors.description = "Description must be at least 10 characters"
    }
    return errors;
}