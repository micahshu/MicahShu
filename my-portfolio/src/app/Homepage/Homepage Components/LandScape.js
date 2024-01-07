import Cloud from "@/app/Components/Cloud";
import ColoredSquare from "@/app/Components/ColoredSquare";
import ProjectCard from "@/app/Components/ProjectCard";

import { FaWordpressSimple } from "react-icons/fa6";


export default function LandScape(props) {

    return (
        <section className="dark:bg-jetBlack bg-neutral-100 snap-start grid grid-cols-2 grid-rows-6 px-28 pt-28 rotate">

            {/* gird 1,1 */}
            <div className="col-start-1 row-start-1 row-span-1">
                <h2 className="text-[150px] font-headerFont">My Work</h2>
            </div>

            <div className="col-start-1 row-start-2 row-span-2">
                <ProjectCard margin="r" color="sunYellow" src="ProCabinets.png" text="stlprocabinets.com"/>
            </div>

            <div className="col-start-2 row-start-3 row-span-2">
            <ProjectCard margin="l" color="limeGreen" src="PropertyPros.png" text="stlpropertypros.com"/>
            
            </div>

            <div className="col-start-1 row-start-4 row-span-2">
            <ProjectCard margin="r" color="skyBlue" src="inlandMarine.png" text="inlandmarinefl.com"/>
            </div>
            
            <div className="col-start-2 row-start-5 row-span-2">
            <ProjectCard margin="l" color="poppyRed" src="concreteDreams.png" text="concretedreamsohio.com"/>
            </div>

            <div className="col-start-1 row-start-6 max-h-12">
                <div className="border border-jetBlack bg-secondary h-[500px] w-[500px] rounded-3xl hover:rounded-xl transition-all ease-in-out duration-300 ">
                    <h2 className="text-jetBlack p-10 font-headerFont text-5xl text-right">Mobile Responsive<br /> Fast Page Speed<br /> SEO Ready</h2>
                    <h2 className='text-jetBlack font-headerFont text-9xl'>Test</h2>
                </div>             
            </div>
            
        </section>
    )
}

