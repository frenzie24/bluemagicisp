const FaqComponent = ({ title, paragraph, list }) => {



    return (
        <section>
            {title}
            {Array.isArray(paragraph) ? paragraph.map(entry => {
                return <span key={`${title}${Math.random()}`}>{entry}</span>
            }) : paragraph}
            <ul>
                {list ? list.map(entry => {
                    return <li key={`${title}${Math.random()}`}>{entry}</li>
                }) : <></>}
            </ul>
        </section>
    )
}
export default FaqComponent;