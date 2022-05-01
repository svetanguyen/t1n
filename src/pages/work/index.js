import React, { useEffect } from 'react';
import Works from '../../components/Works'

export default function Work() {
    useEffect(() => {
        document.title = 'My craft';
      }, []);

    return (
        <div className=" bg-dark-100 lg:pt-20">
            <Works/>
        </div>
    )
}