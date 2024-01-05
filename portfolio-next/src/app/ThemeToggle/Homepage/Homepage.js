

export default function HomePage() {

    const subtext = "<WebDev />"

    return (
        <div className="z-0 overflow-hidden">
            <div className="snap-y overflow-x-hidden snap-mandatory overflow-y-scroll h-screen">

                <section className="h-screen bg-jetBlack snap-start grid grid-cols-5 grid-rows-4 gap-0">
                    <div className="col-start-1 col-span-2 row-start-1 row-end-3 ">
                        <h1 className="text-nowrap font-headerFont ml-32 text-9xl mt-64 "><span className="text-sunYellow">Hi,</span> I'm Micah</h1>
                    </div>
                    <div className=" row-start-3 col-span-2 row-span-2 grid grid-cols-1 grid-rows-2 gap-4">
                        <div>
                            <h3 className=" font-headerFont ml-32 text-4xl">{subtext}</h3>
                        </div>
                        
                        <div className="row-start-3">
                            <p className="ml-32 mb-10 font-barlow text-nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br /> nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                
                    </div>
                    <div className="col-start-3 col-span-3 row-span-1">

                    </div>
                    <div className=" overflow-hidden z-10 my-32 mx-32 h-[50vw] w-[50vw] gap-5 rotate-[225deg] place-items-center row-start-2 col-start-3 row-span-3 col-span-3 grid grid-cols-2 grid-rows-2">
                        <div className="overflow-hidden z-10 w-full h-full bg-sunYellow rounded-[40px] hover:rounded-2xl
    transition-all duration-200 ease-linear m-auto"></div>
    
                        <div className="overflow-hidden z-10 w-full h-full bg-poppyRed rounded-[40px] hover:rounded-2xl
    transition-all duration-200 ease-linear col-start-2 row-start-2 m-auto"></div>
                        <div className="overflow-hidden z-10 w-full h-full bg-skyBlue rounded-[40px] hover:rounded-2xl
    transition-all duration-200 ease-linear col-start-1 row-start-2 m-auto"></div>
                    </div>


                    
                </section>

                <section className="h-screen flex bg-skyBlue snap-start">
                    <h1>Second Page</h1>
                </section>

                <section className="h-screen flex bg-pastelPurple snap-start">
                    <h1>Third Page</h1>
                </section>

                <section className="h-screen flex bg-pastelYellow snap-start">
                    <h1>Fourth Page</h1>
                </section>


            </div>
        </div>
    )
}