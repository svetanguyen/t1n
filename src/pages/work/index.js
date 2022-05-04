import React, { useEffect } from 'react';
import Works from '../../components/Works'
import LinksList from '../../components/LinksList'
import Grid from './imageGrid'
import { DRIBBLE, BEHANCE } from '../../constants/links'

export default function Work() {
    useEffect(() => {
        document.title = 'My craft';
      }, []);
      const links = [
          {name: 'My dribble', link: DRIBBLE},
          {name: 'My behance', link: BEHANCE}
      ]

    return (
        <div className=" bg-dark-100 lg:pt-20 pt-10">
            <Works/>
            <div className="pt-6 lg:pt-14">
                <LinksList links={links} color='white' center={true} />
            </div>
            <Grid />
        </div>
    )
}