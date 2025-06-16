
import BMSpinBanner from "../components/BMSpinBanner"
import AboutUs from "../components/AboutUs";
import Header from "../components/Header.jsx";

const Story =() => {

    return (
        <section className="transition duration-500 delay-150 ease-in-out size-full flex flex-row flex-wrap justify-center items-center p-8 border-4 border-solid border-slate-800/20 bg-slate-600/20 rounded-3xl hover:bg-slate-600/40 hover:border-slate-800/40 [&_h3]:hover:animate-none">
            <h2 className="animate-pulse duration-300 ">BLUE MAGIC ISP'S STORY</h2>
            <iframe className="p-10 w-full h-full" src="https://www.youtube.com/embed/_9A0lr4sid0" title="Blue Magic - Hurricane Michael" frameBorder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>
    )
}

export default Story;