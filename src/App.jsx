import { useMediaQuery } from 'react-responsive';
import MobileHome from './MobileHome';
import Home from './Home';


function App() {
  
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isMobile ? (
        <MobileHome />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
