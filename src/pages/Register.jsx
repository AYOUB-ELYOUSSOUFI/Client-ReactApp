import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [error,setError] = useState("");
    const navigate = useNavigate();

    const handelChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        try {
            const url = `${process.env.REACT_APP_BASE_URL}/api/auth/register`;
            axios.post(url,data)
                 .then(res => {
                    console.log(res);
                });
            navigate("/login");
        } catch (error) {
            if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
        }
    }
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full px-4 py-4 space-y-8 bg-white rounded">
                <div>
                    <img
                        className="mx-auto h-12 w-auto mt-1"
                        src={logo}
                        alt="Workflow"
                    />
                    <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">Register</h2>
                </div>
                <form className="mt-3 space-y-6" onSubmit={handelSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="Username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                id="Username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                onChange={handelChange}
                                value={data.username}
                                required
                                className="mt-2 mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="username"
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                E-mail
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                onChange={handelChange}
                                value={data.email}
                                required
                                className="mt-2 mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                onChange={handelChange}
                                value={data.password}
                                required
                                className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    {error && <div>{error}</div>}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                I agree to the privacy policy
                            </label>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span> */}
                            Register
                        </button>
                        <div className="mt-1 text-sm text-center">
                            Already has a account?
                            <Link to="/login" className='ml-2 underline'>Login</Link>
                        </div>
                        <div className="mt-1 text-center text-[10px]">
                            Copyright © {new Date().getFullYear()} Ayoub EL YOUSSOUFI
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
