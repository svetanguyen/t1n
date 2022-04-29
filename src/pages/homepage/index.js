import React, { useEffect } from 'react';
import Banner from './banner'

export default function Homepage() {
    useEffect(() => {
        document.title = 'Homepage';
      }, []);
      
    return (
        <div className="homepage">
            <Banner />
        </div>
    )
}