export default function Banner() {
    return (
        <div className="relative">
            <div>
                <img
                    src='/images/network-banner.jpg'
                    alt='network banner' />
            </div>
            <div className="absolute py-8 lg:py-23 px-4 lg:px-11 h-full w-full top-0 left-0 flex justify-between flex-col">
                <div>
                    <h1 className="text-xl md:text-5xl lg:text-82 font-atmospheric"><span className="text-blue">X</span><span className="bg-clip-text text-transparent bg-gradient-blue"> Network</span></h1>
                    <h3 className="font-montserrat text-xxs md:text-3xl lg:text-4xl-lg font-light text-white-200">Check your internet speed</h3>
                </div>
                <div>
                    <h3 className="font-poppins text-xxs lg:text-4xl-lg font-light text-white">By Tin Bui</h3>
                    <img
                        src="/images/profile-logo.png" 
                        alt="Profile"
                        className="w-28"
                    />
                </div>
            </div>
        </div>
    )
}