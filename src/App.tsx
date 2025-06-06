import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';

import './index.css';
import Home from './pages/Home';
import ProjectPage from './pages/project';
import { ScrollProvider } from './context/scrollContext';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <ScrollProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </ScrollProvider>
  );
}

export default App;
