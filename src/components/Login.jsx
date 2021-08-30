import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import '../css/login.css'

const Login = () => {

    const [formData,setFormData] = useState({
        email: '',
        password: ''
    })

    const [authenticated,setAuthenticated] = useState(false)

    const {email,password} = formData

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email != '' && password != '') {
            setAuthenticated(true)
        }
    }

    if(authenticated) {
        return <Redirect to='/to-do'></Redirect>
    }

    return (
        <div className='login-wrapper'>
            <h1>
                Log In
            </h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="email" placeholder="Enter your email address" required name="email" value={email} onChange={(e) => {
                            setFormData({...formData,[e.target.name]: e.target.value})
                        }}/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Enter your password" required name="password" value={password} 
                        onChange={(e) => {
                            setFormData({...formData,[e.target.name]: e.target.value})
                        }}/>
                    </div>
                    <input type="submit" className='login-btn' value='Log In' />
                </form>
            </div>
        </div>
    )
}

export default Login
