import ColoredSquare from "@/app/Components/ColoredSquare"


export default function HeroSection(){
    
    return (
        <section id="hero" className=" h-screen bg-neutral-100 dark:bg-jetBlack snap-start grid gap-0 grid-cols-1 grid-rows-3
                                        md:grid-rows-4 md:grid-cols-4 
                                        xl:grid-cols-5">
                  <div className="col-start-1  row-start-1 ml-16 md:ml-0 self-end md:flex md:justify-center md:items-center
                                  md:col-span-4 
                                  lg:col-span-2  lg:row-end-3 
                                  xl:ml-32 ">
                      <h1 className=" font-headerFont text-4xl    
                                    sm:text-8xl
                                    md:mt-96 
                                    lg:text-8xl lg:text-nowrap  lg:ml-32 lg:mt-48
                                    xl:text-9xl  xl:mt-64">
                                        <span className="dark:text-sunYellow text-poppyRed">Hi,</span> I'm Micah</h1>
                  </div>
                  
                  <div className=" col-start-1 row-start-2 
                                   md:row-start-3 md:col-span-2 
                                   lg:-m-0 ">
                          <p className=" pr-4 md:pr-4 ml-16 mb-10 font-barlow text-base 
                                         md:ml-32 md:mr-0 md:text-2xl
                                         lg:text-xl">I am a <span className="text-limeGreen font-headerFont text-xl md:text-2xl">Web Developer</span> currently studying for a computer science degree in Fort Collins, CO. I also work as a <span className="text-poppyRed font-headerFont text-xl md:text-2xl">Team Lead </span>for a digital marketing company. Here are a collection of projects that highlight my knowledge of <span className="text-skyBlue md:text-sunYellow font-headerFont text-xl md:text-2xl "> Full-Stack Development</span>  </p>
                      </div>
                  
                  <div className=" m-auto overflow-hidden z-10 md:my-32 md:mx-32 h-64 w-64 gap-5 rotate-45 md:rotate-[225deg] place-items-center md:row-start-2 md:row-span-3 md:col-span-3 grid grid-cols-2 grid-rows-2
                                   md:w-[50vw] md:h-[50vw]   xl:col-start-3 ">
                      <ColoredSquare classHeight={"h-full"} classWidth={"w-full"} bgColor={"bg-sunYellow"} />
                      <ColoredSquare classHeight={"h-full"} classWidth={"w-full"} size={"w-full h-full"} bgColor={"bg-poppyRed"} grid={'col-start-2 row-start-2'} />
                      <ColoredSquare classHeight={"h-full"} classWidth={"w-full"} bgColor={"bg-skyBlue"} grid={'col-start-1 row-start-2'} />
                      
                      
                  </div>


                  
              </section>
    )
}