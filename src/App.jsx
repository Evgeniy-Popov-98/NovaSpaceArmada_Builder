import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './page/HomePage/HomePage';
import { BilderPage } from './page/BilderPage/BilderPage';

import './App.css';

function App() {
  return (
    <Suspense fallback={<div>Lodding...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bilder" element={<BilderPage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
