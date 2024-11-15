import { useMediaQuery } from 'react-responsive';
import MobileHome from './HomeMobile';
import Home from './Home';


export default function HomeRoute() {
  
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
