export default function validateCreateLink(values) {
    let errors = {}

    //text errors
    if(!values.content) {
        errors.content = "Description required"
    } else if (!values.content || values.content.length < 10) {
        errors.content = "Description must be at least 10 characters"
    }
    //title errors
    if(!values.title) {
        errors.title = "Title required"
    } else if (!values.title || values.title.length < 3) {
        errors.title = "Title must be at least 3 characters"
    }
    //thumb errors
    if(!values.thumbImg) {
        errors.thumbImg = "Thumb image required"
    } else if (!values.thumbImg || values.thumbImg.length < 3) {
        errors.thumbImg = "Thumb image must exist"
    }
    return errors;
}