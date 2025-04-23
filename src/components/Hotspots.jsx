import React from "react";

const Hotspots = ({ Width }) => {
    return (<>
        <h1>BEST SELLING</h1>
        <div className={`${Width} grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4`}>
            <a href="https://readinet.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/blob-5626e1c.png" className="" alt="Vite logo" />
            </a>
            <a href="https://readinet.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/blob-3fb84ec.png" className="" alt="Vite logo" />
            </a>
            <a href="https://readinet.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/blob-051bd1e.png" className="" alt="Vite logo" />
            </a>
        </div>
    </>
    );
};

export default Hotspots;