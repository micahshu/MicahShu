import Cloud from "@/app/Components/Cloud";
import ColoredSquare from "@/app/Components/ColoredSquare";
import ProjectCard from "@/app/Components/ProjectCard";
import { FaWordpressSimple } from "react-icons/fa6";


export default function LandScape() {

    return (
        <section className="dark:bg-jetBlack bg-neutral-100 snap-start grid grid-cols-2 grid-rows-6 px-28 pt-28 rotate">

            <div className="col-start-1 row-start-1 row-span-1">
                <h2 className="text-[150px] font-headerFont">WEBSITES</h2>
            </div>

            <div className="col-start-1 row-start-2 row-span-2">
            <div className={` border-sunYellow bg-sunYellow border mr-10 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear hover:scale-105`}>
                    <img className="w-full rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear " src='ProCabinets.png'></img>
                    <div className="flex flex-col justify-center align-text-top">
                    <FaWordpressSimple  className="m-auto mt-2 text-jetBlack" size={24} />
                        <h3 className="text-jetBlack font-headerFont text-2xl p-2  text-center">stlprocabinets.com</h3>
                        
                    </div>
                    
                </div>
                
            </div>

            <div className="col-start-2 row-start-3 row-span-2">
            <div className={` border-limeGreen bg-limeGreen border ml-10 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear hover:scale-105`}>
                    <img className="w-full rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear " src='PropertyPros.png'></img>
                    <div className="flex flex-col justify-center align-text-top">
                    <FaWordpressSimple  className="m-auto mt-2 text-jetBlack" size={24} />
                        <h3 className="text-jetBlack font-headerFont text-2xl p-2  text-center">stlpropertypros.com</h3>
                        
                    </div>
                    
                </div>  
            
            </div>

            <div className="col-start-1 row-start-4 row-span-2">
            <div className={` border-skyBlue bg-skyBlue border mr-10 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear hover:scale-105`}>
                    <img className="w-full rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear " src='inlandMarine.png'></img>
                    <div className="flex flex-col justify-center align-text-top">
                    <FaWordpressSimple  className="m-auto mt-2 text-jetBlack" size={24} />
                        <h3 className="text-jetBlack font-headerFont text-2xl p-2  text-center">inlandmarinefl.com</h3>
                        
                    </div>
                    
                </div>  
            </div>
            
            <div className="col-start-2 row-start-5 row-span-2">
            <div className={` border-poppyRed bg-poppyRed border ml-10 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear hover:scale-105`}>
                    <img className="w-full rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear " src='concreteDreams.png'></img>
                    <div className="flex flex-col justify-center align-text-top">
                    <FaWordpressSimple  className="m-auto mt-2 text-jetBlack" size={24} />
                        <h3 className="text-jetBlack font-headerFont text-2xl p-2  text-center">concretedreamsohio.com</h3>
                        
                    </div>
                    
                </div>  
            </div>

            <div className="col-start-1 row-start-6 max-h-12">
                <div className="border border-jetBlack dark:bg-secondary bg-jetBlack  h-[500px] w-[500px] rounded-3xl hover:rounded-xl transition-all ease-in-out duration-300 ">
                    <h2 className="dark:text-jetBlack text-secondary p-10 font-headerFont text-5xl text-right">Mobile Responsive<br />Fast Page Speed <br /> SEO Ready</h2>
                    <h2 className='dark:text-jetBlack text-secondary font-headerFont text-center mt-32 text-8xl'>WEB APPS</h2>
                </div>             
            </div>
            
        </section>
    )
}

