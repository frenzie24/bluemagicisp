import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel({slides}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    return (
<div className='h-64'>
        <div className="embla" ref={emblaRef}>

            <div className="embla__container">


                {slides?.map(slide => (
                <div className={`embla__slide`}> {slide}</div>
                ))}
              
            </div>

        </div>

</div>
    )
}
