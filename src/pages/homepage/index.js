import React, { useEffect } from 'react';
import Banner from './banner'
import Intro from './intro'
import Works from '../../components/Works'

export default function Homepage() {
    useEffect(() => {
        document.title = 'Homepage';
        document.querySelector('html').style.scrollBehavior = 'smooth'
      }, []);
      
    return (
        <div className="homepage">
            <Banner />
            <Intro />
            <Works comingSoon={true} />
        </div>
    )
}