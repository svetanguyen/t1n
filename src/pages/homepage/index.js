import React, { useEffect } from 'react';
import Banner from './banner'
import Intro from './intro'
import Works from '../../components/Works'
import Design from './design'

export default function Homepage() {
    useEffect(() => {
        document.title = 'Homepage';
        document.querySelector('html').style.scrollBehavior = 'smooth'
      }, []);
      
    return (
        <div className="homepage bg-dark-100">
            <Banner />
            <Intro />
            <Works comingSoon={true} />
            <Design />
        </div>
    )
}