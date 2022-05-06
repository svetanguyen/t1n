import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HOMEPAGE, ABOUT, WORK, CONTACT, CASTTOTV, NETWORK } from './constants/routes';
import Header from './components/Header'
import Footer from './components/Footer'

const Homepage = lazy(() => import('./pages/homepage/index'));
const About = lazy(() => import('./pages/about/index'));
const Contact = lazy(() => import('./pages/contact'));
const Work = lazy(() => import('./pages/work/index'));
const CastToTv = lazy(() => import('./pages/cast-to-tv'))
const Network = lazy(() => import('./pages/works/network/index'))

function App() {
  return (
    <div className="App">
      <Router>
        <Header  />
        <Suspense fallback={<p>Loading..</p>}>
          <Routes>
            <Route path={HOMEPAGE} element={<Homepage />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={WORK} element={<Work />} />
            <Route path={CONTACT} element={<Contact />} />
            <Route path={CASTTOTV} element={<CastToTv />} />
            <Route path={NETWORK} element={<Network />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
