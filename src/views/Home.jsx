
import BMSpinBanner from "../components/BMSpinBanner"
import { EmblaCarousel } from "../components/EmblaCarousel";
import EyeCatch from "../components/EyeCatch.jsx";
import Header from "../components/Header.jsx"
import Row from "../components/Row.jsx";
import Story from "../components/Story.jsx";
const Home = () => {
    return (<>
        <Header />
        <div className="z-0 w-full h-screen">
            <BMSpinBanner />
            <EyeCatch title={'Sale!'} subtitle={'Save on reliable LTE internet with Bluemagic ISP!'} buttonText={'Shop'} />
            <EmblaCarousel slides={[<div className={`embla__slide`}> <img className='w-full h-64' src="./images/rs719.png" alt="..." /></div>,
            <div className={`embla__slide`}> <img className='w-full h-64' src="./images/rs730.png" alt="..." /></div>,
            <div className={`embla__slide`}> <img className='w-full h-64' src="./images/cr730.png" alt="..." /></div>,
            <div className={`embla__slide`}> <img className='w-full h-64' src="./images/bmlogo.webp" alt="..." /></div>]} />
            <Row content={<Story />} />
ß        </div>
    </>)
}

export default Home;