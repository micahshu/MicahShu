import ColoredSquare from "@/app/Components/ColoredSquare"


export default function HeroSection(){
    
    return (
        <section id="hero" className=" h-screen bg-neutral-100 dark:bg-jetBlack snap-start grid grid-cols-4 xl:grid-cols-5 md:grid-rows-4 gap-0">
                  <div className="col-start-1 col-span-4 md:col-span-4 lg:col-span-2 row-start-1 lg:row-end-3 xl:ml-32 flex justify-center items-center">
                      <h1 className="lg:text-nowrap font-headerFont text-7xl sm:text-8xl  xl:text-9xl xl:mt-64 lg:ml-32 lg:mt-48 mt-36 md:mt-96 lg:text-8xl "><span className="dark:text-sunYellow text-poppyRed">Hi,</span> I'm Micah</h1>
                  </div>
                  
                  <div className=" lg:-m-0 col-start-1 row-start-2 md:row-start-3 col-span-3 md:col-span-2">
                          <p className=" ml-16 md:ml-32 md:mr-0  mb-10 font-barlow text-xl md:text-2xl lg:text-xl">I am a <span className="text-limeGreen font-headerFont text-3xl md:text-2xl">Web Developer</span> currently studying for a computer science degree in Fort Collins, CO. I also work as a <span className="text-poppyRed font-headerFont text-3xl md:text-2xl">Team Lead </span>for a digital marketing company. Here are a collection of projects that highlight my knowledge of <span className="text-skyBlue md:text-sunYellow font-headerFont text-3xl md:text-2xl "> Full-Stack Development</span>  </p>
                      </div>
                  
                  <div className=" overflow-hidden z-10 my-32 mx-32 h-64 w-64 md:w-[50vw] md:h-[50vw] gap-5 rotate-[225deg] place-items-center row-start-2  xl:col-start-3 row-span-3 col-span-3 grid grid-cols-2 grid-rows-2">
                      <ColoredSquare classHeight={"h-full"} classWidth={"w-full"} bgColor={"bg-sunYellow"} />
                      <ColoredSquare classHeight={"h-full"} classWidth={"w-full"} size={"w-full h-full"} bgColor={"bg-poppyRed"} grid={'col-start-2 row-start-2'} />
                      <ColoredSquare classHeight={"h-full"} classWidth={"w-full"} bgColor={"bg-skyBlue"} grid={'col-start-1 row-start-2'} />
                      
                      
                  </div>


                  
              </section>
    )
}