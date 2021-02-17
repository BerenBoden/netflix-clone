import React, {useState} from 'react'
import '../../styles/Login.css'
import logo from '../../assets/netflixLogo.png'
import SignUp from '../signUp/SignUp';

const Login = () => {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="login">
            <div className="login__background">
                <img className="login__logo" src={logo} alt="" />
                <button className="login__button">Sign in</button>
                <div className="login__gradient" />
            </div>
            <div className="login__body">
                {signIn ? (
                    <SignUp />
                ) : (
                    <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch Netflix? Enter your email to create or restart your membership.</h3>
                        <div className="login__input">
                            <form>
                                <input type="email" placeholder="Email address"/>
                                <button onClick={() => setSignIn(true)} className="login__getStarted">GET STARTED</button>
                            </form>
                        </div>
                    </>
                    )
                } 
                
            </div>
        </div>
    )
}

export default Login
