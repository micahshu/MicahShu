import ColoredSquare from "@/app/Components/ColoredSquare"


export default function HeroSection(){
    const subtext = "<WebDev portfolio={true} />"
    const message1 = "<"
     const message2 = "WebDev"
     const message3= " portfolio"
     const message4 = "="
     const message5 = "{"
     const message6= "true"
     const message7="} "
    const message8= "/>"
    return (
        <section className="h-screen bg-neutral-100 dark:bg-jetBlack snap-start grid grid-cols-5 grid-rows-4 gap-0">
                  <div className="col-start-1 col-span-2 row-start-1 row-end-3 ">
                      <h1 className="text-nowrap font-headerFont ml-32 text-9xl mt-64 "><span className="dark:text-sunYellow text-poppyRed">Hi,</span> I'm Micah</h1>
                  </div>
                  <div className=" row-start-3 col-span-2 row-span-2 grid grid-cols-1 grid-rows-2 gap-4">
                      <div>
                          <h3 className=" font-bodyFont ml-32 text-4xl">
                            {message1}
                            <span className="text-limeGreen">{message2}</span>
                            <span className="text-blue-300">{message3}</span>
                            {message4}
                            <span className="text-blue-500">{message5}</span>
                            <span className="text-blue-300">{message6}</span>
                            <span className="text-blue-500">{message7}</span>

                            {message8}

                            </h3>
                      </div>
                      
                      <div className="row-start-3">
                          <p className="ml-32 mb-10 font-barlow text-nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br /> nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
              
                  </div>
                  <div className="col-start-3 col-span-3 row-span-1">

                  </div>
                  <div className=" overflow-hidden z-10 my-32 mx-32 h-[50vw] w-[50vw] gap-5 rotate-[225deg] place-items-center row-start-2 col-start-3 row-span-3 col-span-3 grid grid-cols-2 grid-rows-2">
                      <ColoredSquare classHeight={"h-full"} classWidth={"w-full"} bgColor={"bg-sunYellow"} />
                      <ColoredSquare classHeight={"h-full"} classWidth={"w-full"} size={"w-full h-full"} bgColor={"bg-poppyRed"} grid={'col-start-2 row-start-2'} />
                      <ColoredSquare classHeight={"h-full"} classWidth={"w-full"} bgColor={"bg-skyBlue"} grid={'col-start-1 row-start-2'} />
                      
                      
                  </div>


                  
              </section>
    )
}