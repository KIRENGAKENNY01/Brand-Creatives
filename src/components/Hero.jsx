import Navigation from "./navigation";


function Hero(){

    return (
        <div className=" w-full lg:h-[700px] md:bg-hero-desktop bg-hero-mobile h-[500px] bg-cover bg-center ">
            <div className="flex flex-col md:gap-10 gap-6 ">
                <Navigation/>
                <div className="flex flex-col items-center gap-5 md:gap-10  ">
                    <h1 className="text-[40px] text-center text-[#fff] md:text-[50px] md:mb-10  font-black">WE ARE CREATIVES</h1>
                    <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
                </div>
            </div>

        </div>

    )
}


export default Hero;