import Banner from './banner'
import Concept from './concept'
import Logo from './logo'
import Description from './description'
import Presentation from './presentation'
import Ending from '../../../components/PresentationEnding'

export default function Network() {
    return (
        <div>
            <Banner />
            <Concept />
            <Logo />
            <Description />
            <Presentation />
            <Ending bg="black" color="white-200" font="atmospheric" />
        </div>
    )
}