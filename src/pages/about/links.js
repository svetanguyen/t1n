import {DRIBBLE, LINKEDIN, BEHANCE, FACEBOOK} from '../../constants/links'
import LinksList from '../../components/LinksList'

export default function Links() {
    const links = [
        {name: 'Dribble', link: DRIBBLE},
        {name: 'Linkedin', link: LINKEDIN},
        {name: 'Behance', link: BEHANCE},
        {name: 'Facebook', link: FACEBOOK}
    ]
    return (
        <div className="bg-gradient-top-60 lg:gradient-top-50">
            <div className="pb-16 lg:pb-22 px-4 lg:px-11 pt-32 lg:pt-21 lg:grid grid-rows-2 grid-cols-2">
                <div className="pb-12  text-center lg:text-left row-start-1 row-span-1 col-span-1 lg:pb-20">
                    <a href="/" className="text-gray-100 font-extended underline text-56 lg:text-100">Resume</a>
                </div>
                <div className="col-start-2 row-span-2 col-span-1 pb-16 lg:pb-0">
                   <img
                    className="w-full lg:w-auto"
                    src={`/images/profile.jpg`}
                    alt="profile"
                 /> 
                </div>
                <div className="col-span-1 col-start-1">
                    <LinksList links={links} />
                </div>
            </div>
        </div>
    )
}