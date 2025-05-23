import { ReactNode, useEffect, useRef } from 'react';
import './App.css';
import Frame from './components/dev/Frame';
import { devMode } from './utils/utils';
import ThemeToggler from './components/dev/Theming';

const App = () => {
  const appDiv = useRef(null);

  useEffect(() => {
    if (devMode) {
      document.body.style.visibility = 'visible';
      return;
    }
  }, []);

  return (
    <AppProvider>
      <div className="app" ref={appDiv}>
        <div className="app-wrapper">
        </div>
      </div>
      <ThemeToggler />
    </AppProvider>
  );
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  if (devMode) {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;

      const aspectRatio = innerWidth / innerHeight;
      const phoneAspectRatio = 27.6 / 59;

      if (phoneAspectRatio < aspectRatio) {
        document.documentElement.style.fontSize = '1.66vh';
      } else {
        document.documentElement.style.fontSize = '3.4vw';
      }
    };

    useEffect(() => {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    handleResize();

    return (
      <div className="dev-wrapper">
        <Frame>{children}</Frame>
      </div>
    );
  } else return children;
};

export default App;
