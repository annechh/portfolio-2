import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import './index.css';
import Home from './pages/Home';
import ProjectPage from './pages/project';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Route>
    </Routes>
  );
}

export default App;
