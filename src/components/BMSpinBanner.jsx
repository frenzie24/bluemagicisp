const BMSpinBanner = () => {

    return (
        <div className='bg-cover bg-fixed bg-[url(/images/helene.webp)] w-full h-64 flex flex-row justify-center items-center'>
            <div className='bg-cover bg-[url(/images/bmspin.webp)] h-48 w-48 origin-center animate-[spin_4000ms_linear_reverse_infinite] flex flex-row justify-center items-center '>
                <img className='h-12 origin-center animate-[spin_4000ms_linear_infinite] ' src="/images/bmlogo.webp" />
            </div>
        </div>
    )
}

export default BMSpinBanner;