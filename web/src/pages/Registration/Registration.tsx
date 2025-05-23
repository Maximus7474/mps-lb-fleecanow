import { useEffect, useState } from 'react';
import './Registration.css'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmedPassword, setConfirmedPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // register(username, password);
  };

  const isLoginValid = () => {
    if (username.length < 6) return false;
    if (password.length < 6) return false;
    if (password !== confirmedPassword) return false;
    return true;
  }

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (<div className='login'>
    <img src='/icon.png' />

    <form className='register-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          name='username'
          placeholder='username'
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor='username'>Password:</label>
        <input
          type='password'
          name='confirmedPassword'
          placeholder='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
          <label htmlFor='username'>Confirm Password:</label>
          <input
            type='password'
            name='confirmedPassword'
            placeholder='password'
            required
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
        </div>

      <button type='submit' className='register-button' disabled={!isLoginValid()}>
        Register
      </button>
    </form>
  </div>);
};

export default Registration;
