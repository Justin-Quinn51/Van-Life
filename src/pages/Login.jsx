import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/host';

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    loginUser(loginFormData)
      .then((data) => {
        console.log(data);
        setError(null);
        localStorage.setItem('loggedin', true);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus('idle');
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className='flex flex-col items-center gap-y-8 px-5 font-bold text-3xl my-40'>
      {location.state?.message && (
        <h3 className='text-red-600'>{location.state.message}</h3>
      )}
      <h1>Sign in to your account</h1>
      {error?.message && (
        <h3 className='text-center text-red-600'>{error.message}</h3>
      )}
      <form onSubmit={handleSubmit} className='flex flex-col w-full'>
        <input
          className='indent-2.5  rounded-t-md text-FilterButtonText text-base bg-white font-thin shadow-xl border-'
          name='email'
          type='email'
          onChange={handleChange}
          placeholder='Email address'
          value={loginFormData.email}
        />
        <input
          className='indent-2.5 rounded-b-md text-FilterButtonText text-base bg-white font-thin'
          name='password'
          type='password'
          onChange={handleChange}
          placeholder='Password'
          value={loginFormData.password}
        />
        <button
          className='text-center bg-rentVan rounded-md text-white text-base py-2 mt-6'
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </form>
      <small className='text-sm text-luxury'>
        Don&#39;t have an account?{' '}
        <span className='text-rentVan'> Create one now</span>
      </small>
    </div>
  );
}
