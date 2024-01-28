import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [interests, setInterests] = useState([]);
    const navigate = useNavigate();


    const handleInterestChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setInterests([...interests, value]);
        } else {
            setInterests(interests.filter((interest) => interest !== value));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON
            });
            if (response.ok) {
                console.log('User registered successfully!');
                console.log(response);
                navigate('/login');
            } else {
                console.error('Failed to register user');
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };
    

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl text-center mb-4 text-gray-800">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name='username'
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name='password'
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" > Interests:</label>
                        <div className="flex flex-wrap">
                        <label className="inline-flex items-center mr-4 mb-2">
            <input
                type="checkbox"
                value="coding"
                onChange={handleInterestChange}
                className="form-checkbox h-5 w-5 text-indigo-600"
                name='interests'
            />
            <span className="ml-2 text-gray-700">Coding</span>
        </label>
        <label className="inline-flex items-center mr-4 mb-2">
            <input
                type="checkbox"
                value="reading"
                onChange={handleInterestChange}
                className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Reading</span>
        </label>
        <label className="inline-flex items-center mr-4 mb-2">
            <input
                type="checkbox"
                value="writing"
                onChange={handleInterestChange}
                className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Writing</span>
        </label>
        <label className="inline-flex items-center mr-4 mb-2">
            <input
                type="checkbox"
                value="drawing"
                onChange={handleInterestChange}
                className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Drawing</span>
        </label>
        <label className="inline-flex items-center mr-4 mb-2">
            <input
                type="checkbox"
                value="gaming"
                onChange={handleInterestChange}
                className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Gaming</span>
        </label>
        <label className="inline-flex items-center mr-4 mb-2">
            <input
                type="checkbox"
                value="music"
                onChange={handleInterestChange}
                className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Music</span>
        </label>
        <label className="inline-flex items-center mr-4 mb-2">
            <input
                type="checkbox"
                value="traveling"
                onChange={handleInterestChange}
                className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Traveling</span>
        </label>
        <label className="inline-flex items-center mr-4 mb-2">
            <input
                type="checkbox"
                value="cooking"
                onChange={handleInterestChange}
                className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Cooking</span>
        </label>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
