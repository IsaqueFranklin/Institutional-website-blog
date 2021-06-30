import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import firebase, { FirebaseContext } from '../firebase'


function PrivateRoute({ component: Component, ...rest}) {
    
    const { firebase, user } = useContext(FirebaseContext)
    
    return (
        <Route {...rest} render={props => {
            return user ? <Component {...props} /> : <Redirect to='/' />
        }}>
         
        </Route>
    )
}

export default PrivateRoute