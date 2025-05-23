import ReactDOM from 'react-dom/client';
import { AuthProvider } from './components/provider/AuthProvider';
import App from './App';
import { devMode } from './utils/utils';

import './colors.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

if (window.name === '' || devMode) {
  const renderApp = () => {
    root.render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
  };

  if (devMode) {
    renderApp();
  } else {
    window.addEventListener('message', event => {
      if (event.data === 'componentsLoaded') renderApp();
    });
  }
}
