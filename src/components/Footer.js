import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { HOMEPAGE, ABOUT, WORK, CONTACT } from '../constants/routes'
import {DRIBBLE, BEHANCE, LINKEDIN, FACEBOOK} from '../constants/links'


export default function Footer() {
    const [gradient, setGradient] = useState(true)
    const UpdateFooter = () => {
        const location = useLocation()
        useEffect(() => {
          if (location.pathname === '/' || location.pathname.includes('work')) {
            setGradient(true)
          } else {
            setGradient(false)
          }
        }, [location])
      }
      UpdateFooter()
    return (
        <div className={`footer py-6 lg:py-16 px-4 lg:px-11 lg:flex${gradient ? ' bg-gradient' : ' bg-black'}`}>
            <div className="lg:w-4/12 lg:flex flex-col justify-between">
                <h2 className="text-white text-32 font-extended">Tiin.</h2>
                <p className="font-mediumexp text-xl text-white hidden lg:block">Created by Bui Dys Tin © 2022</p>
            </div>
            <div className="flex flex-wrap pt-10 pb-20 lg:pb-0 lg:pt-0 lg:justify-between lg:pr-20 lg:w-8/12">
                <ul className="text-white pr-20 font-lightexp text-21 lg:text-4xl">
                    <li className="pb-2 lg:pb-5">
                        <Link className="hover:text-yellow" to={HOMEPAGE}>
                            Home
                        </Link>
                    </li>
                    <li className="py-2 lg:py-5">
                        <Link className="hover:text-yellow" to={ABOUT}>
                            About
                        </Link>
                    </li>
                    <li className="py-2 lg:py-5">
                        <Link className="hover:text-yellow" to={WORK}>
                            Work
                        </Link>
                    </li>
                    <li className="pt-2 lg:pt-5">
                        <Link className="hover:text-yellow" to={CONTACT}>
                            Contacts
                        </Link>
                    </li>
                </ul>
                <ul className="text-white font-lightexp lg:pr-20 text-21 lg:text-4xl">
                    <li className="pb-2 lg:pb-5">
                        <a href={DRIBBLE} rel="noreferrer" target="_blank" className="hover:text-yellow">
                            Dribble
                        </a>
                    </li>
                    <li className="py-2 lg:py-5">
                        <a href={BEHANCE} rel="noreferrer" target="_blank" className="hover:text-yellow">
                            Behance
                        </a>
                    </li>
                    <li className="py-2 lg:py-5">
                        <a href={LINKEDIN} rel="noreferrer" target="_blank" className="hover:text-yellow">
                            Linkedin
                        </a>
                    </li>
                    <li className="pt-2 lg:pt-5">
                        <a href={FACEBOOK} rel="noreferrer" target="_blank" className="hover:text-yellow">
                            Facebook
                        </a>
                    </li>
                </ul>
            </div>
            <p className="font-mediumexp text-center text-xxs text-white lg:hidden">Created by Bui Dys Tin © 2022</p>
        </div>
    )
}