import { Link } from 'react-router-dom'
import { works } from '../constants/works'
import ComingSoon from './ComingSoon'

export default function Works({comingSoon}) {
    return (
        <div className="bg-dark-100 works lg:pt-20 pt-10">
            <h2 className="text-white font-mediumexp uppercase text-center pb-6 lg:pb-14 text-xl lg:text-5xl">My craft</h2>
            <ul className="works-items__wrapper">
                {
                    works.map((work, index) => 
                        <li className="border-b lg:border-y border-gray works-item mb-16" key={index}>
                            <div className={`p-4 lg:p-0 lg:h-128 flex-col-reverse flex${index % 2 === 0 ? ' lg:flex-row' : ' lg:flex-row-reverse'}`}>
                                <div className="works-item__content-wrapper lg:w-1/2 h-full lg:p-10 flex lg:justify-center items-center">
                                    <div className="w-4/6 font-lightexp">
                                        <h4 className="text-gray-100 font-bold font-main-bold text-base lg:text-29 opacity-60 uppercase mb-2 mt-6 lg:mt-0 lg:mb-5">{work.title}</h4>
                                        <p className="text-white text-sm lg:leading-normal lg:text-4xl lg:mb-10">{work.description}</p>
                                        <Link to={work.link ? work.link : ''} className="text-yellow pt-3 lg:pt-0 pb-3 lg:pb-0 flex text-base lg:text-4xl items-center">
                                            Mobile app
                                            <svg className="ml-2 w-3.5 lg:w-7" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 31.5L32 1.5M32 1.5H5M32 1.5V28.5" stroke="#FFEC6B" strokeWidth="3"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="works-item__img-wrapper lg:w-1/2">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="lg:h-full lg:object-cover"
                                    />
                                </div>
                            </div>
                        </li>    
                    )
                }
                {
                    comingSoon && <ComingSoon even={(works.length + 1) % 2 === 0} />
                }
                
            </ul>
        </div>
    )
}