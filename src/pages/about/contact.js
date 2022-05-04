import {CONTACT} from '../../constants/routes'

export default function Contact() {
    return (
        <div className="px-4 lg:px-11 py-10 lg:py-20 lg:my-10 text-center font-extended text-26 lg:text-8xl">
            <p className="text-dark-200">
                Interested in working together? <a href={CONTACT} className="text-yellow underline">Drop me a line</a>
            </p>
        </div>
    )
}