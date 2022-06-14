export default function Intro() {
    return (
        <div id="Intro" className="intro relative">
            <div className="intro__image-wrapper bg-dark">
                <img
                    src="/images/intro.png"
                    alt="Intro"
                    className="ml-auto"
                 />
            </div>
            <p className="intro__content font-lightexp absolute top-1/2 leading-normal left-0 w-4/6 pl-4 lg:pl-16 -translate-y-1/2 text-lg lg:text-6xl-sm text-white">
                Currently based in Toronto, work with the team helping to improve digital products.
            </p>
        </div>
    )
}