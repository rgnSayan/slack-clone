import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {

    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://image.flaticon.com/icons/png/512/2111/2111615.png"
                    alt=""
                />
                <h3>Sign In To rgnSayan HQ</h3>
                <p>rgnSayan.slack.com</p>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
