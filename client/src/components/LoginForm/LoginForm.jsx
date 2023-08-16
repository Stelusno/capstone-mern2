import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Log In</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium">Email</label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label className="block mt-3 mb-2 font-medium">Password</label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">
            LOG IN
          </button>
        </form>
        {error && <p className="mt-3 text-red-600">{error}</p>}
      </div>
    </div>
  );
}
