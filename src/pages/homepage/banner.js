import Arrow from './arrow'
export default function Banner() {
    return (
        <div className="banner relative">
            <div className="banner__image-wrapper absolute inset-0 w-full h-full">
                <img
                  src="/images/banner.png"
                  alt="Banner"
                  className="h-full object-cover min-h-screen w-full"
                />
            </div>
            <div className="banner__content pt-32 lg:pt-22 pb-20 flex flex-col justify-center h-full min-h-screen relative text-center">
                <h1 className="text-3xl pb-14 lg:pb-16 sm:text-6xl lg:text-7xl-sm leading-tight font-extended text-white">
                    <span className="relative">
                        Hi, my name is Tin,
                        <svg className="absolute hidden lg:block right-0 top-0 translate-x-1/2 -translate-y-1/2" width="99" height="93" viewBox="0 0 99 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.7552 41.7495L44 13.2794L49.2448 41.7495C49.4327 42.7693 50.2307 43.5673 51.2505 43.7552L79.7206 49L51.2505 54.2448C50.2307 54.4327 49.4327 55.2307 49.2448 56.2505L44 84.7206L38.7552 56.2505C38.5673 55.2307 37.7693 54.4327 36.7495 54.2448L8.27938 49L36.7495 43.7552C37.7693 43.5673 38.5673 42.7693 38.7552 41.7495Z" stroke="#ECEEF1" strokeWidth="3"/>
                            <path d="M83.0165 5.33841C83.2177 4.24664 84.7823 4.24664 84.9835 5.33841L86.2086 11.9891C86.2838 12.397 86.603 12.7162 87.0109 12.7914L93.6616 14.0165C94.7534 14.2177 94.7534 15.7823 93.6616 15.9835L87.0109 17.2086C86.603 17.2838 86.2838 17.603 86.2086 18.0109L84.9835 24.6616C84.7823 25.7534 83.2177 25.7534 83.0165 24.6616L81.7914 18.0109C81.7162 17.603 81.397 17.2838 80.9891 17.2086L74.3384 15.9835C73.2466 15.7823 73.2466 14.2177 74.3384 14.0165L80.9891 12.7914C81.397 12.7162 81.7162 12.397 81.7914 11.9891L83.0165 5.33841Z" fill="#ECEEF1"/>
                        </svg>
                    </span><br/>
                    I am a Designer
                   
                </h1>
                <a href="#Intro" className="flex justify-center">
                    <Arrow />
                </a>
            </div>

        </div>
    )
}