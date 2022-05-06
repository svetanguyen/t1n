import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { HOMEPAGE, ABOUT, WORK, CONTACT } from '../constants/routes'

export default function Drawer({ show, setShow }) {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'
            document.body.style.position = 'absolute'
            document.body.style.top = '0'
            document.body.style.height = '100vh'
        } else {
            document.body.style.height = 'auto'
            document.body.style.position = 'relative'
            document.body.style.overflow = 'auto'
        }
    }, [show])
    return (
        <div className={`fixed z-10 top-0 h-screen right-0 overflow-scroll menu-drawer w-full sm:w-96 flex items-center bg-black${show ? '' : ' translate-x-full'}`}>
            <div className="px-5 py-8 flex justify-end absolute top-0 left-0 w-full">
                <svg onClick={() => setShow(false)} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6046 0.000822227L25.4331 2.82925L2.82843 25.4339L0 22.6055L22.6046 0.000822227Z" fill="#ECEEF1"/>
                    <path d="M2.82846 0.000822227L3.18691e-05 2.82925L22.6047 25.4339L25.4331 22.6055L2.82846 0.000822227Z" fill="#ECEEF1"/>
                </svg>
            </div>
            <ul className="w-full mt-20 border-y py-2 border-gray text-white px-4 font-extended text-3xl">
                <li className="py-2">
                    <Link className="hover:text-yellow" to={HOMEPAGE}>
                        Home
                    </Link>
                </li>
                <li className="py-2">
                    <Link className="hover:text-yellow" to={ABOUT}>
                        About
                    </Link>
                </li>
                <li className="py-2">
                    <Link className="hover:text-yellow" to={WORK}>
                        Work
                    </Link>
                </li>
                <li className="py-2">
                    <Link className="hover:text-yellow" to={CONTACT}>
                        Contacts
                    </Link>
                </li>
            </ul>

        </div>
    )
}