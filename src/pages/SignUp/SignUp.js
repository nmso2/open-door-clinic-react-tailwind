import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../resources/images/logo-black.png'

const SignUp = () => {

    const { logInUsingGoogle, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/';


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handaleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handalePasswordChange = e => {
        setPassword(e.target.value);
    }


    const handleGoogleLogIn = () => {
        logInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            }).catch((error) => {

            }).finally(() => setIsLoading(false));
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="flex justify-center min-h-screen bg-gray-100">
            <div className="container my-12 max-w-md border-2 border-gray-200 p-12 bg-white my-auto">
                <img src={logo} alt="" className="mb-3" />
                <p className="mb-8 text-2xl">Sign up for your account</p>
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col">
                        <input onBlur={handleNameChange} type="text" name="name" id="name" placeholder="Your name" {...register("name", { required: true })} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-3" />
                        {errors.name?.type === 'required' && <span className="mb-5 text-red-500">This field is required</span>}
                    </div>

                    <div className="flex flex-col">
                        <input onBlur={handaleEmailChange} type="email" name="email" id="email" placeholder="Your email address" {...register("email", { required: true })} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-3" />
                        {errors.email && <span className="mb-5 text-red-500">This field is required</span>}
                    </div>

                    <div className="flex flex-col">
                        <input onBlur={handalePasswordChange} type="password" name="password" id="password" placeholder="Your password" {...register("password", { required: true })} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-3" />

                        {errors.password && <span className="mb-5 text-red-500">This field is required</span>}
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
                    <button className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">

                        Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;