import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HOMEPAGE, ABOUT, WORK, CONTACT } from '../constants/routes'
import Drawer from './Drawer'

export default function Header() {
    const [transparent, setTransparent] = useState(true)
    const UpdateHeader = () => {
        const location = useLocation()
        useEffect(() => {
            console.log('update')
          if (location.pathname.includes('work') || location.pathname.includes('not-found')) {
            setTransparent(false)
          } else {
              setTransparent(true)
          }
        }, [location])
      }
    const [show, setShow] = useState(false)
    const showDrawer = (e) => {
        e.preventDefault();
        setShow(true)
    }
    UpdateHeader()

    return (
        <div className={`header z-10 flex px-4 lg:px-11 lg:px-6 py-10 justify-between${transparent ? ' absolute top-0 left-0 right-0' : ' bg-gradient'}`}>
            <Link className="logo text-white text-3xl" to={HOMEPAGE} aria-label="page logo">
                T1n.
            </Link>
            <ul className="hidden font-medium text-4xl text-white lg:flex">
                <li className="pr-11">
                    <Link to={HOMEPAGE}>
                        Home
                    </Link>
                </li>
                <li className="px-11">
                    <Link to={ABOUT}>
                        About
                    </Link>
                </li>
                <li className="px-11">
                    <Link to={WORK}>
                        Work
                    </Link>
                </li>
                <li className="pl-11">
                    <Link to={CONTACT}>
                        Contacts
                    </Link>
                </li>
            </ul>
            <a className="lg:hidden" href="/" onClick={showDrawer}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 9V5H3V9H29ZM29 17V13H3V17H29ZM29 25V21H3V25H29Z" fill="#ECEEF1"/>
                </svg>
            </a>
            <Drawer show={show} setShow={setShow} />
        </div>
    )
}