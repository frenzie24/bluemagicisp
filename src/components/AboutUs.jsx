import React from "react";

const AboutUs = ({ Width }) => {
    return (<>
 <h1 className={Width}>BLUE MAGIC ISP OFFERS RELIABLE HIGH SPEED 5G INTERNET SERVICE</h1>
        <div className={`${Width} grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4`}>

            <div>
                <a href="https://readinet.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/cr730.png" className="rounded-full" alt="Vite logo" />
                </a>
                <h2>Text here?</h2>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus congue dui accumsan pharetra. Mauris dignissim eleifend volutpat. Donec nec quam et dui accumsan lobortis. Nullam ut ullamcorper turpis. Integer convallis condimentum ultrices. Nam varius imperdiet viverra. Ut neque urna, volutpat sit amet sapien in, semper egestas odio. Nunc egestas nibh eget neque gravida viverra. Aenean ut sodales lorem, quis suscipit lectus.
            </div>
            <div>
                <a href="https://readinet.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/rs730.png" className="rounded-full" alt="Vite logo" />
                </a>
                <h2>Text here?</h2>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus congue dui accumsan pharetra. Mauris dignissim eleifend volutpat. Donec nec quam et dui accumsan lobortis. Nullam ut ullamcorper turpis. Integer convallis condimentum ultrices. Nam varius imperdiet viverra. Ut neque urna, volutpat sit amet sapien in, semper egestas odio. Nunc egestas nibh eget neque gravida viverra. Aenean ut sodales lorem, quis suscipit lectus.
            </div>
            <div>
                <a href="https://readinet.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/bmisp.png" className="rounded-full" alt="Vite logo" />
                </a>
                <h2>Text here?</h2>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus congue dui accumsan pharetra. Mauris dignissim eleifend volutpat. Donec nec quam et dui accumsan lobortis. Nullam ut ullamcorper turpis. Integer convallis condimentum ultrices. Nam varius imperdiet viverra. Ut neque urna, volutpat sit amet sapien in, semper egestas odio. Nunc egestas nibh eget neque gravida viverra. Aenean ut sodales lorem, quis suscipit lectus.
            </div>
        </div>
    </>
    );
};

export default AboutUs;