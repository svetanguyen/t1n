import {process} from '../../constants/designProcess'

export default function Design() {
    return (
        <div className="design px-4 lg:px-0 pb-20">
            <h2 className="uppercase text-white text-xl lg:text-5xl text-center font-mediumexp pt-20 pb-6">Design process</h2>
            <ul className="border border-gray lg:border-x-0">
                {
                    process.map((item, index) => 
                    <li className={`${index + 1 !== process.length ? 'border-b border-gray' : ''} lg:border-0 lg:grid lg:grid-cols-7`}>
                        <div className="hidden col-span-1 col-start-1 lg:block border-r border-gray row-span-full"></div>
                        {
                            (item.grid === 'right' || item.grid === 'center') && 
                            <div className="col-start-2 col-span-1 border-r border-gray"></div>
                        }
                        {
                            item.grid === 'right' && 
                            <div className={`col-start-3 col-span-1 border-gray ${index === 0 || process[index - 1].grid === 'right' ? '' : ' border-t'}`}></div>
                        }
                        <div className={`text-center py-5 col-span-3 text-white-100 opacity-70 ${item.grid === 'center' && index !== process.length - 1 && process[index + 1].grid === 'center' ? 'lg:border-b' : (item.grid === 'left' ? 'lg:border-b' : '')} lg:border-gray ${item.grid === 'left' ? 'lg:border-r' : (item.grid === 'right' ? 'lg:border-l lg:border-t' : '')}`}>
                            <img
                                src={item.image}
                                alt={item.description} 
                                className="mx-auto mb-4"
                            />
                            <p className="text-21 lg:text-26 font-lightexp">{item.description}</p>
                        </div>
                        {
                            item.grid === 'left' && 
                            <div className={`col-start-5 col-span-1 border-gray ${index === process.length - 1 || process[index + 1].grid === 'left' ? '' : ' border-b'}`}></div>
                        }
                        {
                            (item.grid === 'left' || item.grid === 'center') && 
                            <div className="col-start-6 col-span-1 border-l border-gray"></div>
                        }
                        <div className="hidden col-start-7 col-span-1 border-l border-gray lg:block row-span-full"></div>
                    </li>)
                }
            </ul>
        </div>
    )
}