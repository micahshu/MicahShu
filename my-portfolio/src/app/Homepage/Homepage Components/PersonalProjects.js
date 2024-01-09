

export default function PersonalProject() {

    return (
        <section className="h-[300-vh]  bg-jetBlack snap-start">
            <div className="grid grid-col-3 grid-rows-2 pb-10 pt-40 ms px-28 gap-10 col-auto">

                <div className="col-start-1 row-start-2 border border-limeGreen bg-limeGreen h-96 rounded-3xl  transition-all duration-200 ease-linear">
                    <h2 className="text-center text-jetBlack font-headerFont text-6xl p-5 ">perspective.io</h2>
                    <div className="grid grid-col-2 grid-row-1">
                        <div className="col-start-1">   
                            <h3 className="text-left p-8 text-jetBlack font-bodyFont text-2xl ">Technology: Next.Js | MUI | MongoDB</h3>
                            <p className="text-left p-8 text-jetBlack font-bodyFont text-2xl ">The Personal Tracking App to rule them all <br /> Under Development</p>
                        </div>
                        <div className="col-start-2"><img src="portfolioscreenshot.png"></img></div>
                     </div>
                </div>
                <div className="col-start-2 row-start-1 row-span-2 border border-secondary bg-secondary  w-40 rounded-3xl  transition-all duration-200 ease-linear"></div>
                <div className="col-start-3 row-start-1 row-span-2 border border-skyBlue bg-skyBlue   w-40 rounded-3xl transition-all duration-200 ease-linear"></div>
                <div className="z-20  col-start-2 col-span-2 h-48 row-start-1 border border-secondary bg-secondary rounded-3xl flex justify-center items-center"><h2 className="text-jetBlack font-headerFont text-5xl">Personal Projects</h2></div>
                <div className="col-start-1 row-start-1 border border-poppyRed bg-poppyRed h-96 rounded-3xl  transition-all duration-200 ease-linear">
                    <h2 className="text-center font-headerFont text-6xl p-5 text-jetBlack ">micahshu.dev</h2>
                    <h3 className="text-left p-8 font-bodyFont text-2xl text-jetBlack ">Technology: Next.Js | TailWind</h3>
                    <p className="text-left p-8 font-bodyFont text-2xl text-jetBlack ">I created this site to be a hub for my digital presence. My first dive into designing with Tailwind.</p>
                </div>   
                <div className="z-50 mt-48  col-start-2 col-span-2 h-48 row-start-2 border border-skyBlue bg-skyBlue rounded-3xl flex justify-center items-center"><h2 className="text-jetBlack font-headerFont text-4xl">More Coming Soon</h2></div>
            </div>
        </section>
    )
}