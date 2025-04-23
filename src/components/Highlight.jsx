import React from "react";

const Highlight = ({ widths, color, link }) => {
   // debugger;
    return (
        <>
            <div className={`${widths} ${color} flex flex-col flex-wrap items-center`}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src='./images/rs719.png' className="rounded-full" />
                    <h2>TEXT HERE TEXT HERE TEXT HERE TEXT HERE TEXT HERE </h2>
                </a >
            </div>

        </>
    )
}

export default Highlight;