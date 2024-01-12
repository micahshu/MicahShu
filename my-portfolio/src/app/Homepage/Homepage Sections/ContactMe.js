import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import Link from 'next/link';
export default function ContactMe(){

    return (
        <section id='contact' className=" bg-secondary  dark:bg-jetBlack snap-start">
            <div className="grid grid-cols-1 lg:pb-56  lg:grid-cols-3 lg:grid-row-1 pb-10 pt-40 ms px-8 lg:px-28 gap-10">
                

                    <div className='row-start-1 col-start-1 bg-poppyRed  rounded-3xl'>
                        <h2 className='font-headerFont text-center text-3xl pt-2'>About this Project</h2>
                        <p className='p-4 font-bodyFont'>This Project served as an introductory to Next.js and Tailwind for me. Learning two new frameworks may have caused some headaches, but I had a lot of fun, and overall I am happy with how it turned out. My biggest mistake was not properly planning for mobile, I had to back track and refactor most of my code. I am still not completely happy with mobile, and will most likely return after learning more. This project taught me alot, and I am currently implementing what I learned in a v2 of my portfolio.  </p>
                        
                    </div>  
                    <div className=' row-start-2 col-start-1 lg:row-start-1 lg:col-start-2 bg-sunYellow  rounded-3xl'>
                    <h2 className='font-headerFont text-jetBlack text-center text-3xl pt-2'>Drop a line</h2>
                        <p className='p-4 text-jetBlack text-center font-headerFont'>Email: Micah.shumaker@gmail.com</p>
                        <div className='flex justify-evenly'>
                           <Link target='_blank' href="https://github.com/micahshu"> <FaGithub size={32} className='text-jetBlack'/></Link>
                           <Link target='_blank' href="https://www.linkedin.com/in/micah-shumaker/"> <FaLinkedinIn size={32} className='text-jetBlack'/></Link>
                        </div>
                        <div className='flex justify-center items-center pb-8 pt-8'><img className='h-1/2 w-1/2 rounded-full border border-secondary' src="profilepic.jpeg"></img></div>
                    </div>     
                    <div className='lg:row-start-1 row-start-3 col-start-1 lg:col-start-3 bg-skyBlue rounded-3xl'>
                    <h2 className='font-headerFont text-center text-3xl pt-2'>About me :)</h2>
                        <p className='p-4 font-bodyFont'>I am a Web Developer from Nothern Colorado! Between my 3 children, job, and studies I stay pretty busy. When I do get a free moment I enjoy tinkering with tech, reading, and skateboarding. </p>
                        <p className='p-4 font-bodyFont'>Fun fact: My twin boys have been right next me the entire time while developing this site. They have been the most helpful <a className='dark:text-jetBlack text-secondary' target='_blank' href="https://en.wikipedia.org/wiki/Rubber_duck_debugging"> Rubber Ducks.</a></p>
                        
                     
                    </div> 
                    


            </div>
            
        </section>

    )
}