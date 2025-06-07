import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './component/Layout';
import Atlas from './pages/Atlas';
import HomePage from './pages/HomePage';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/atlas" element={<Atlas />} />
          <Route path="*" element={"error"} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
