export default function Grid() {
    return (
        <div className="container mx-auto">
            <div className="image-grid lg:grid lg:-mx-2 grid-cols-3 px-4 pb-10 lg:pb-21 lg:px-11">
                <div className="image-grid__item col-start-1 col-span-2 py-2 h-full lg:p-2">
                    <img
                        src="/images/work.jpg"
                        alt="portfolio"
                        className="w-full max-h-738 h-full object-cover"
                    />
                </div>
                <div className="image-grid__item h-full col-start-3 col-span-1 py-2 lg:p-2">
                    <img
                        src="/images/work-2.jpg"
                        alt="portfolio"
                        className="w-full max-h-738 h-full object-cover"
                    />
                </div>
                <div className="image-grid__item py-2 lg:p-2 col-span-3">
                    <img
                        src="/images/work-3.jpg"
                        alt="portfolio"
                        className="w-full max-h-738 h-full object-cover"
                    />
                </div>
                <div className="image-grid__item col-start-1 col-span-1 py-2 lg:p-2">
                    <img
                        src="/images/work-4.jpg"
                        alt="portfolio"
                        className="w-full max-h-738 h-full object-cover"
                    />
                </div>
                <div className="image-grid__item col-start-2 col-span-2 py-2 lg:p-2">
                    <img
                        src="/images/work-5.jpg"
                        alt="portfolio"
                        className="w-full max-h-738 h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}