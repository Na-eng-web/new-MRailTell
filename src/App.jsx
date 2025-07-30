import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './component/Layout';
import Atlas from './pages/Atlas';
import HomePage from './pages/HomePage';
import { useEffect } from 'react';

// Component to automatically scroll to top when navigating between routes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of page on route change for better UX
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main layout wrapper for all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />           {/* Landing page */}
          <Route path="/atlas" element={<Atlas />} />      {/* Interactive map */}
          <Route path="*" element={"error"} />             {/* 404 fallback */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
