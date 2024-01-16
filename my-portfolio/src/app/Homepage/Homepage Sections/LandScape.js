import Cloud from "@/app/Components/Cloud";
import ColoredSquare from "@/app/Components/ColoredSquare";
import ProjectCard from "@/app/Components/ProjectCard";
import { FaWordpressSimple } from "react-icons/fa6";
import Link from 'next/link'


export default function LandScape() {

    return (
        <section id="landscape" className="dark:bg-jetBlack bg-neutral-100 snap-start  gap-10 grid gird-cols-1 lg:grid-cols-2 lg:grid-rows-6 md:px-28 pt-28 rotate">

            <div className="col-start-1 row-start-1 row-span-1">
                <h2 className=" text-6xl lg:text-[150px] font-headerFont text-center">WEBSITES</h2>
            </div>

            <div className="col-start-1 row-start-2 lg:row-span-2">
                <Link target="_blank" href="https://www.stlprocabinets.com/"><div className={` border-sunYellow bg-sunYellow border lg:mr-10 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear `}>
                    <img className="w-full rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear " src='ProCabinets.png'></img>
                    <div className="flex flex-col justify-center align-text-top">
                    <FaWordpressSimple  className="m-auto mt-2 text-jetBlack" size={24} />
                        <h3 className="text-jetBlack font-headerFont text-2xl p-2  text-center">stlprocabinets.com</h3>
                        
                    </div>
                    
                </div></Link>
                
            </div>

            <div className="col-start-1 lg:col-start-2 row-start-3 lg:row-start-3 lg:row-span-2">
            <Link href="https://stlpropertypros.com/" target="_blank"><div className={` border-limeGreen bg-limeGreen border lg:ml-10 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear `}>
                    <img className="w-full rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear " src='PropertyPros.png'></img>
                    <div className="flex flex-col justify-center align-text-top">
                    <FaWordpressSimple  className="m-auto mt-2 text-jetBlack" size={24} />
                        <h3 className="text-jetBlack font-headerFont text-2xl p-2  text-center">stlpropertypros.com</h3>
                        
                    </div>
                    
                </div> </Link> 
            
            </div>

            <div className="col-start-1 row-start-4 lg:row-span-2">
            <Link href="https://inlandmarinefl.com/" target="_blank"><div className={` border-skyBlue bg-skyBlue border lg:mr-10 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear `}>
                    <img className="w-full rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear " src='inlandMarine.png'></img>
                    <div className="flex flex-col justify-center align-text-top">
                    <FaWordpressSimple  className="m-auto mt-2 text-jetBlack" size={24} />
                        <h3 className="text-jetBlack font-headerFont text-2xl p-2  text-center">inlandmarinefl.com</h3>
                        
                    </div>
                    
                </div> </Link> 
            </div>
            
            <div className="col-start-1 lg:col-start-2 lg:row-start-5 row-start-5 lg:row-span-2">
            <Link href="https://www.concretedreamsohio.com/" target="_blank"><div className={` border-poppyRed bg-poppyRed border lg:ml-10 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear `}>
                    <img className="w-full rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear " src='concreteDreams.png'></img>
                    <div className="flex flex-col justify-center align-text-top">
                    <FaWordpressSimple  className="m-auto mt-2 text-jetBlack" size={24} />
                        <h3 className="text-jetBlack font-headerFont text-2xl p-2  text-center">concretedreamsohio.com</h3>
                        
                    </div>
                    
                </div></Link>  
            </div>

            <div className="col-start-1 row-start-6 max-h-64 lg:max-h-12">
                <div className="border border-jetBlack dark:bg-secondary bg-jetBlack  h-[500px] w-full rounded-3xl hover:rounded-xl transition-all ease-in-out duration-300 ">
                    <h2 className="dark:text-jetBlack text-secondary p-10 font-headerFont text-5xl text-right">Mobile Responsive<br />Fast Page Speed</h2>
                    <h2 className='dark:text-jetBlack text-secondary font-headerFont text-center lg:mt-32 mt-44 text-8xl'>WEB APPS</h2>
                    <p className="dark:text-jetBlack text-secondary text-center">Images and more info coming soon... sorry!</p>
                </div>             
            </div>
            
        </section>
    )
}

