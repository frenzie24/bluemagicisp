import React from "react";

const BlueMagic = ({ widths }) => {
    return (
        <>
            <h1 className='p-4'>BLUEMAGIC ISP</h1>
            <div className={`flex flex-wrap flex-row w-full justify-center ${widths}`}>
                <a href="https://readinet.com/" target="_blank" rel="noopener noreferrer">
                    <img src={'./images/bmisp.png'} />
                </a>
            </div>
        </>
    );
}

export default BlueMagic;