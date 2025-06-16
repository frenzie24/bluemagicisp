const BMSpinBanner = () => {

    return (
        <div className='w-full h-64 flex flex-row justify-center items-center bg-transparent'>
            <div className='bg-cover bg-[url(/images/bmspin.webp)] h-48 w-48 origin-center animate-[spin_10000ms_linear_reverse_infinite] flex flex-row justify-center items-center '>
                <img className='h-12 origin-center animate-[spin_10000ms_linear_infinite] ' src="/images/bmlogo.webp" />
            </div>
        </div>
    )
}

export default BMSpinBanner;