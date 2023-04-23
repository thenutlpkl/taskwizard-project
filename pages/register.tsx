import { useRouter } from 'next/router';
import { SetStateAction, useEffect, useState } from 'react';
import Link from 'next/link';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from './firebaseConfig';
import Modal from './components/Modal';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleEmailChange = (event: { target: { value: SetStateAction<string> } }) => setEmail(event.target.value);
  const handlePasswordChange = (event: { target: { value: SetStateAction<string> } }) => setPassword(event.target.value);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const auth = getAuth(firebase);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User created:', user);
      setShowModal(true);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    router.push('/');
  };

  return (
    <div className="container mx-auto mt-12 mb-8">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold mr-4">Register</h1>
        <Link href="/" legacyBehavior>
          <a className="text-blue-500">Go back</a>
        </Link>
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
      {showModal && (
        <Modal onClose={handleModalClose}>
          <p>You have successfully registered!</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleModalClose}>
            Close
          </button>
        </Modal>
      )}
    </div>
  );
}
