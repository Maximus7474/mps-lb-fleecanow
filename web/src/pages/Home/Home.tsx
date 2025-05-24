import { ChevronDown, RadioTower, Send, UserPen } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <div className="home">
      <div className="logo">
        <img src="/icon.png" alt="App Icon" />
      </div>

      {user ? (
        <section className="welcome">
          <h2>Welcome back, {user.displayName ?? user.username}!</h2>
          <p>Welcome back !</p>
          <button onClick={logout}>
            Logout
          </button>
        </section>
      ) : (
        <section className='connect'>
          <h2>You aren't currently connected</h2>
          <p>
            Please <Link to='/register'>Register</Link> or <Link to='/login'>Login</Link> to use FleecaNow
          </p>
        </section>
      )}

      <section className="about">
        <h3>About Us</h3>
        <p>
          Welcome to FleecaNow, an App created by Fleeca Banks©.
          With us, you can now send money to your familly or friends through your phone!
        </p>
      </section>

      <details className="news">
        <summary><ChevronDown /><h3>Latest News</h3></summary>
        <ul>
          <li>📅 May 22: New dark mode released!</li>
          <li>🔥 April 30: Feature X is now available to all users.</li>
          <li>🔧 April 15: We've fixed several bugs to improve your experience.</li>
        </ul>
      </details>

      <footer>
        <Link to='/transfer'>
          <Send />
        </Link>
        <Link to='/proximity'>
          <RadioTower />
        </Link>
        <Link to='/profile'>
          <UserPen />
        </Link>
      </footer>
    </div>
  );
}

export default Home;
