import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './page/HomePage/HomePage';

import './App.css';

function App() {
  return (
    <Suspense fallback={<div>Lodding...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
