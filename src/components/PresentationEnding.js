export default function Ending({bg, font, color}) {
    return (
        <div className={`bg-${bg} py-[100px] lg:py-[418px]`}>
            <h3 className={`text-${color} max-w-[205px] md:max-w-2xl lg:max-w-4xl text-lg md:text-3xl lg:text-[56px] md:leading-[1.4] text-center mx-auto font-${font}`}>
                Thanks for whatching!
            </h3>
        </div>
    )
}