import { useRouter } from 'next/router';
import { SetStateAction, useEffect, useState } from 'react';

import BackIcon from '../icons/back.svg';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (event: { target: { value: SetStateAction<string> } }) => setEmail(event.target.value);
  const handlePasswordChange = (event: { target: { value: SetStateAction<string> } }) => setPassword(event.target.value);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    console.log('User created:', user);
    router.push('/');
  };

  return (
    <div className="container mx-auto mt-12 mb-8">
      <div className="flex items-center mb-4 cursor-pointer" onClick={() => router.push('/')}>
        <BackIcon className="h-6 w-6 mr-2" />
        <h1 className="text-2xl font-bold">Register</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
