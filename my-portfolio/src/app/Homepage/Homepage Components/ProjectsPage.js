import { useState } from "react";
import { FaWordpressSimple } from "react-icons/fa6";



export default function ProjectsPage() {
    const [content, setContent] = useState('placeholder');

    const handleButtonClick = (newContent) => {
        setContent(newContent);
      };

    return (
        <section className="h-screen dark:bg-jetBlack bg-secondary snap-start  grid grid-cols-2 grid-rows-3 px-28 pt-32">


            <div className="col-start-2 row-start-1 row-span-2">
                <div className={` border-sunYellow bg-sunYellow border ml-10 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear`}>
                    <img className="w-full rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear " src='https://placehold.co/600x325.png'></img>
                    <div className="flex flex-col justify-center align-text-top">
                        <div className="grid grid-cols-6 grid-row-2">
                            <h3 className="mt-2 col-start-2 col-span-5 row-start-1 text-jetBlack font-headerFont text-2xl p-2  text-left">Bombadil - Hosting Management System</h3>
                            <h3 className="col-start-2 col-span-5 row-start-2 text-jetBlack font-bodyFont text-xl p-2  text-left"> Technologies - React | MUI | MongoDB | Flask </h3>
                            <div className="col-start-1 row-span-2 flex items-center justify-center">
                                <p onClick={() => handleButtonClick('Content for Sauron Project')} className=" font-headerFont m-2 p-2 text-center text-2xl border border-jetBlack rounded-2xl bg-jetBlack text-secondary">learn more</p>


                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="col-start-1 row-start-2 row-span-2">
                <div className={` border-limeGreen bg-limeGreen border mr-10 rounded-3xl transition-all duration-200 ease-linear `}>
                    <img className="w-full rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear " src='https://placehold.co/600x325.png'></img>
                    <div className="flex flex-col justify-center align-text-top">
                    <div className="grid grid-cols-6 grid-row-2">
                            <h3 className="mt-2 col-start-1 col-span-5 row-start-1 text-jetBlack font-headerFont text-2xl p-2  text-left">Sauron - Department Management System</h3>
                            <h3 className="col-start-1 col-span-5 row-start-2 text-jetBlack font-bodyFont text-xl p-2  text-left"> Technologies - React | MUI | MongoDB | Express </h3>
                            <div className="col-start-6 row-span-2 flex items-center justify-center">
                                <p onClick={() => handleButtonClick('Content for Bombadil Project')} className=" font-headerFont m-2 p-2 text-center text-2xl border border-jetBlack rounded-2xl bg-jetBlack text-secondary cursor-pointer">learn more</p>


                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <div className="col-start-2 row-start-3">
            <div className="border  border-jetBlack dark:bg-secondary bg-jetBlack ml-10 mt-4  rounded-3xl hover:rounded-xl transition-all ease-in-out duration-300 ">
                    <h2 className="dark:text-jetBlack text-secondary p-10 font-headerFont text-5xl text-right h-[250px] transition-all duration-200 ease-linear">{content}</h2>
                </div>
            </div>





        </section>
    )
}