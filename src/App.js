import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HOMEPAGE, ABOUT, WORK, CONTACT } from './constants/routes';
import Header from './components/Header'

const Homepage = lazy(() => import('./pages/homepage/index'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Work = lazy(() => import('./pages/work'));

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Suspense fallback={<p>Loading..</p>}>
          <Routes>
            <Route path={HOMEPAGE} element={<Homepage />} />
            <Route path={ABOUT} component={<About />} />
            <Route path={WORK} component={<Work />} />
            <Route path={CONTACT} component={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
