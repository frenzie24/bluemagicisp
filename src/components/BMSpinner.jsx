const BMSPinner = ({ size, padding }) => {
    return (
        <div className={`${size} ${padding}`}>
            <div className={`bg-cover bg-[url(/images/bmspin.webp)] ${size} origin-center animate-[spin_10000ms_linear_reverse_infinite] flex flex-row justify-center items-center `}>
                <img className='size-1/3 origin-center animate-[spin_10000ms_linear_infinite] ' src="/images/bmlogo.webp" />
            </div>
        </div>
    )
}

export default BMSPinner;