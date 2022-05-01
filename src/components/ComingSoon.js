export default function ComingSoon({even}) {
    return (
        <li className="coming-soon border-b lg:border-y border-gray works-item mb-16">
                            <div className={`p-4 lg:p-0 lg:h-128 flex-col-reverse flex${even ? ' lg:flex-row-reverse' : ' lg:flex-row'}`}>
                                <div className="works-item__content-wrapper lg:w-1/2 h-full lg:p-10 flex lg:justify-center items-center">
                                    <div className="w-4/6 font-lightexp">
                                        <h4 className="text-gray-100 font-bold font-main-bold text-xl lg:text-37 opacity-60 uppercase mb-2 mt-6 lg:mt-0 lg:mb-5">Coming soon...</h4>
                                    </div>
                                </div>
                                <div className="relative bg-crossed pt-ratio-80 h-0 lg:h-full border-y lg:border-y-0 lg:pt-0 works-item__img-wrapper border-x lg:mr-5 border-gray lg:w-1/2"></div>
                            </div>
                        </li>    
    )
}