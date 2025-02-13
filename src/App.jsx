import { Route, Routes } from 'react-router-dom';
import { Layout } from './component/Layout';
import Atlas from './pages/Atlas';
import HomePage from './pages/HomePage';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/atlas" element={<Atlas />} />
        <Route path="*" element={"error"} />
      </Route>
    </Routes>
  );
}

export default App;
