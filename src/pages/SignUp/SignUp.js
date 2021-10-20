import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../resources/images/logo-black.png'

const SignUp = () => {

    const { logInUsingGoogle, setIsLoading, createNewUser, handleNameChange, handaleEmailChange, handalePasswordChange, email, password, setUserName, error, setError, logInUsingGithub, logInUsingFacebook } = useAuth();

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        logInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
                setError('');
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const handleGithubLogIn = () => {
        logInUsingGithub()
            .then((result) => {
                history.push(redirect_uri);
                setError('');
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }
    const handleFacebookLogIn = () => {
        logInUsingFacebook()
            .then((result) => {
                history.push(redirect_uri);
                setError('');
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const handleCreateUser = (e) => {
        e.preventDefault();
        createNewUser(email, password)
            .then(userCredential => { 
                setUserName();
                history.push('/login');
                alert('Your Accound have been created!')
                setError('');
            }).catch((error) => {
                setError(error.message);
            }).finally(() => { setIsLoading(false) });
    }

    return (
        <div className="flex justify-center min-h-screen bg-gray-100">
            <div className="container my-12 max-w-md border-2 border-gray-200 p-10 bg-white">
                <img src={logo} alt="" className="mb-3" />
                <p className="mb-8 text-2xl text-gray-500">Sign up for your account</p>
                {
                        error ? <p className="text-red-500 mb-5">Error: {error}</p> : <p></p>
                    }
                <form className="flex flex-col" onSubmit={handleCreateUser}>

                    <div className="flex flex-col">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 text-left dark:text-gray-400">Name</label>
                        <input onBlur={handleNameChange} type="text" name="name" id="name" placeholder="Your name" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-3" />
                    </div>

                    <div className="flex flex-col">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 text-left dark:text-gray-400">Email Address</label>
                        <input onBlur={handaleEmailChange} type="email" name="email" id="email" placeholder="Your email address" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-3" />
                    </div>

                    <div className="flex flex-col">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 text-left dark:text-gray-400">Password</label>
                        <input onBlur={handalePasswordChange} type="password" name="password" id="password" placeholder="Your password" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-3" />

                    </div>

                    <div className="mb-6">
                        <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">Sign up</button>
                    </div>
                    <p className="text-sm text-center text-gray-400">
                        Already have an account?
                        <Link to="/login" className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"> Sign in</Link>.
                    </p>
                </form>
                <div className="flex flex-row justify-center mb-8">
                    <span className="absolute bg-white px-4 text-gray-500">or sign-up with</span>
                    <div className="w-full bg-gray-200 mt-3 h-px"></div>
                </div>
                <div className="flex flex-row gap-2">
                    <button className="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out" onClick={handleGoogleLogIn}>
                        Google
                    </button>
                    <button className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out" onClick={handleGithubLogIn}>

                        Github
                    </button>
                    <button className="bg-blue-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-blue-800 duration-100 ease-in-out" onClick={handleFacebookLogIn}>

                        Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;