import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../resources/images/logo-black.png'

const Login = () => {

    const { logInUsingGoogle, setIsLoading, loginWithEmailPassword, handaleEmailChange, handalePasswordChange, email, password, setUser } = useAuth();

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        logInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            }).catch((error) => {

            }).finally(() => setIsLoading(false));
    }

    const handleEmailLogin = e => {
        e.preventDefault();
        loginWithEmailPassword(email, password)
            .then(result => {
                history.push(redirect_uri);
                setUser(result);
            }).catch((error) => {

            }).finally(() => setIsLoading(false));
    }

    return (
        <div>
            <div className="flex justify-center min-h-screen bg-gray-100">
                <div className="container my-12 max-w-md border-2 border-gray-200 p-3 bg-white">
                    <div className="text-center my-6">
                        <img src={logo} alt="" className="px-5 mb-5" />
                        <p className="text-gray-500 text-2xl">Sign in to access your account</p>
                    </div>
                    <div className="m-6">
                        <form className="mb-4">
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 text-left dark:text-gray-400">Email Address</label>
                                <input onBlur={handaleEmailChange} type="email" name="email" id="email" placeholder="Your email address" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                    <a href="#!" className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                                </div>
                                <input onBlur={handalePasswordChange} type="password" name="password" id="password" placeholder="Your password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out" onClick={handleEmailLogin}>Sign in</button>
                            </div>
                            <p className="text-sm text-center text-gray-400">
                                Don&#x27;t have an account yet?
                                <Link to="/signup" className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"> Sign up</Link>.
                            </p>
                        </form>
                        <div className="flex flex-row justify-center mb-8">
                            <span className="absolute bg-white px-4 text-gray-500">or sign-in with</span>
                            <div className="w-full bg-gray-200 mt-3 h-px"></div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <button className="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out" onClick={handleGoogleLogIn}>
                                Google
                            </button>
                            <button className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">

                                Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;