import React from 'react'

function useFormValidation(intialState, validate, authenticate) {

    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)

    useEffect(() => {
        if(isSubmitting) {
            const noErrors = Object.keys(errors).length === 0
            if(noErrors) {
                authenticate()
                setSubmitting(false)
            }
        }else {
            setSubmitting(false)
        }
    }, [errors])

    function handleChange(event){
        event.persist()
        setValues(previousValues => ({
            ...previousValues,
            [event.target.name]: event.target.value
        }))
    }

    function handleBlur() {
        const validationError = validate(values)
        setErrors(validateErrors)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const validateErrors = validate(values)
        setErrors(validateErrors)
        setSubmitting(true)
    }

    return { handleChange, handleSubmit, handleBlur, errors, isSubmitting, values }
}

export default useFormValidation