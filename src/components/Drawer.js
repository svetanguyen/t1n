import React from 'react'
import { Link } from 'react-router-dom';
import { HOMEPAGE, ABOUT, WORK, CONTACT } from '../constants/routes'

export default function Drawer({ show, setShow }) {
    return (
        <div className={`fixed top-0 h-screen right-0 menu-drawer w-full md:w-96 flex items-center bg-black${show ? '' : ' translate-x-full'}`}>
            <div className="px-5 py-8 flex justify-end absolute top-0 left-0 w-full">
                <svg onClick={() => setShow(false)} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6046 0.000822227L25.4331 2.82925L2.82843 25.4339L0 22.6055L22.6046 0.000822227Z" fill="#ECEEF1"/>
                    <path d="M2.82846 0.000822227L3.18691e-05 2.82925L22.6047 25.4339L25.4331 22.6055L2.82846 0.000822227Z" fill="#ECEEF1"/>
                </svg>
            </div>
            <ul className="w-full text-white">
                <li className="py-2">
                    <Link to={HOMEPAGE}>
                        Home
                    </Link>
                </li>
                <li className="py-2">
                    <Link to={ABOUT}>
                        About
                    </Link>
                </li>
                <li className="py-2">
                    <Link to={WORK}>
                        Work
                    </Link>
                </li>
                <li className="py-2">
                    <Link to={CONTACT}>
                        Contacts
                    </Link>
                </li>
            </ul>

        </div>
    )
}