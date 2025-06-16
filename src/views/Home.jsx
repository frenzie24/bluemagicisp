
import BMSpinBanner from "../components/BMSpinBanner"
import BMSPinner from "../components/BMSpinner.jsx";
import { EmblaCarousel } from "../components/EmblaCarousel";
import EyeCatch from "../components/EyeCatch.jsx";
import Header from "../components/Header.jsx"
import Row from "../components/Row.jsx";
import Story from "../components/Story.jsx";
const Home = () => {
    return (<> <div className=" w-full h-full bg-bottom bg-cover bg-fixed bg-[url(/images/hurricanebg.webp)] ">
        <Header />
        <BMSpinBanner />

        <Row
            width="w-9/10"
            height="h-[500px]"
            content={
                <EmblaCarousel slides={[


                    <div className={`flex justify-end embla__slide bg-[url(/images/rs730.png)] bg-cover w-full h-full`}>

                        <EyeCatch
                            containerStyle={'w-1/2 mb-auto text-white p-8 rounded-lg shadow-xl absolute right-20 top-20'}
                            title={'WORK ANYWHERE'}
                            content={'Blue Magic Wfi Devices can be travel-sized, portable wireless devices designed for home or anywhere you are. Blue Magic users can take the same high-speed low latency service they have at home with them on the go.'} buttonText={'CHOOSE YOUR DEVICE'} background={"bg-gray-800/30"} />

                    </div>,
                    <div className={`flex embla__slide bg-[url(/images/workanywhere.webp)] bg-cover size-full`}>
                        <EyeCatch
                            containerStyle={'w-1/4 bg-gray-900/40 mb-auto mt-20 text-white p-8 rounded-lg shadow-xl absolute left-20 my-auto'}
                            title={'INTERNET FOR YOUR LIFESTYLE'}
                            subtitle={'Home or Travel'}
                            content={'High-speed, wireless low-latency broadband internet in remote, rural and city locations across the USA.'}
                            buttonText={'CHOOSE YOUR DEVICE'}
                        />
                    </div>,
                    <div className={`flex embla__slide bg-[url(/images/massunsplash.webp)] bg-cover bg-fixed bg-center w-full h-full`}>
                        <EyeCatch title={'NO CONTRACTS, 24-HOUR TRIAL'}
                            subtitle={'Blue Magic ISP has no contracts!'}
                            content={[`You may cancel your subscription with us at any time by simply returning your device within 24-hours.`,
                                `24-Hour Risk Free Trial!  If it does not work, for any reason, return for a full refund.  We charge only a $35 reprogramming fee for the device.  No questions asked.`,
                                `Easy, Simple, Clean!`,]}
                            buttonText={'CHOOSE YOUR DEVICE'}
                        />
                    </div>,
                    <div className={`flex embla__slide h-full w-full bg-[url(/images/helene.webp)]`}>
                        <div className="flex flex-col w-full h-full items-center justify-center">
                            <EyeCatch

                                containerStyle={'p-8 rounded-lg bg-slate-800/40'}
                                title={'Bluemagic ISP'}
                                titleAnimation={'animate-bounce'}
                                subtitle={'Your connection through the storm'}
                                content="Bluemagic ISP is the best solution for affordable, reliable, LTE internet" />

                            <BMSPinner padding={'mx-10'} size={'size-48'} />
                        </div>
                    </div>,
                    <div className={`flex embla__slide h-full w-full bg-[url(/images/connect.webp)] bg-cover bg-fixed bg-center`}>
                        <div className="flex flex-row w-full h-full items-center">
                            <EyeCatch title={'SHOP NOW'} titleAnimation={'animate-bounce'}
                                subtitle={'PAY LATER'}
                                content="Pay in 4 easy installments. No interest, no fees, no hassle. Choose Klarna at checkout."
                                buttonText={'CHOOSE YOUR DEVICE'}
                            />

                        </div>
                    </div>
                ]}
                />} />
        <BMSpinBanner />
        <Row width="w-full" height="h-[800px]" background="bg-transparent" content={<Story />} />
    </div>
    </>)
}

export default Home;