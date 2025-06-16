const FaqComponent = ({ title, paragraph, list }) => {



    return (
        <section className="p-4 transition delay-125 duration-1000 ease-in-out hover:bg-slate-800 hover:text-white rounded-3xl hover:border-solid border-4 border-slate-100
         [&_h3]:hover:bg-slate-800   [&_h3]:hover:animate-bounce ">
            {title}
            <div className="p-4 text-left ">
            {Array.isArray(paragraph) ? paragraph.map(entry => {
                return <div key={`${title}${Math.random()}`}>{entry}</div>
            }) : paragraph}
            <ul className="px-8 [&_li]:pb-2">
                {list ? list.map(entry => {
                    return <li key={`${title}${Math.random()}`}>{entry}</li>
                }) : <></>}
            </ul>
            </div>
        </section>
    )
}
export default FaqComponent;