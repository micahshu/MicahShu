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
        <section className=" h-screen bg-neutral-100 dark:bg-jetBlack snap-start grid grid-cols-4 xl:grid-cols-5 md:grid-rows-4 gap-0">
                  <div className="col-start-1 col-span-4 md:col-span-4 lg:col-span-2 md:row-start-1 lg:row-end-3 xl:ml-32 flex justify-center items-center">
                      <h1 className="lg:text-nowrap font-headerFont text-7xl md:text-8xl  xl:text-9xl xl:mt-64 lg:ml-32 lg:mt-48 mt-72 md:mt-96 lg:text-8xl "><span className="dark:text-sunYellow text-poppyRed">Hi,</span> I'm Micah</h1>
                  </div>
                  <div className="  md:grid  md:grid-cols-1 md:grid-rows-2 gap-4
                  col-span-4 
                  lg:col-span-2 lg:row-span-3 
                  xl:row-span-2 ">
                      <div className=" scale-0 lg:scale-100">
                          <h3 className="text-nowrap font-bodyFont  ml-32 text-4xl">
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
                      
                      <div className="-m-64 lg:-m-0 grid-cols-4 col-start-2 row-start-3 row-span-4">
                          <p className=" md:ml-32 md:mr-32 lg:mr-0  mb-10 font-barlow text-xl ">I am a <span className="text-limeGreen font-headerFont text-2xl">Web Developer</span> currently studying for a Computer Science degree in Fort Collins, CO. I also work as a <span className="text-poppyRed font-headerFont text-2xl">Team Lead </span>for a digital marketing company. Here are a collection of projects that highlight my knowledge of <span className="text-sunYellow font-headerFont text-2xl "> Full-Stack Development</span>  </p>
                      </div>
              
                  </div>
                  <div className="col-start-3 col-span-3 row-span-1">

                  </div>
                  <div className="scale-0 lg:scale-100 overflow-hidden z-10 my-32 mx-32 h-[50vw] w-[50vw] gap-5 rotate-[225deg] place-items-center row-start-2  xl:col-start-3 row-span-3 col-span-3 grid grid-cols-2 grid-rows-2">
                      <ColoredSquare classHeight={"h-full"} classWidth={"w-full"} bgColor={"bg-sunYellow"} />
                      <ColoredSquare classHeight={"h-full"} classWidth={"w-full"} size={"w-full h-full"} bgColor={"bg-poppyRed"} grid={'col-start-2 row-start-2'} />
                      <ColoredSquare classHeight={"h-full"} classWidth={"w-full"} bgColor={"bg-skyBlue"} grid={'col-start-1 row-start-2'} />
                      
                      
                  </div>


                  
              </section>
    )
}