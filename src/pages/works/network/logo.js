export default function Logo() {
    return (
        <div className="bg-[url('../../public/images/network/bg-2.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="py-[78px] lg:py-[314px]">
                <h2 className="text-white-200 text-2xl lg:text-[93px] lg:leading-[1.2] mb-6 lg:mb-20 font-atmospheric text-center">LOGO</h2>
                <div className="text-center max-w-sm lg:max-w-full mx-auto">
                    <img
                        src="/images/network/logo-1.svg"
                        alt="logo"
                        className="mx-auto mb-4 lg:mb-16 max-w-[101px] lg:max-w-none"
                    />
                    <img
                        src="/images/network/logo-2.svg"
                        alt="logo"
                        className="mx-auto max-w-[219px] lg:max-w-none"
                    />
                </div>
            </div>
        </div>
    )
}