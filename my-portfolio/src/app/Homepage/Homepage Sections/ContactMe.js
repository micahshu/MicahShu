import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

export default function ContactMe(){

    return (
        <section className="h-screen  bg-jetBlack snap-start">
            <div className="grid grid-cols-3 grid-row-2 pb-10 pt-40 ms px-28 gap-10">
                <div className='col-start-2 row-start-1 bg-secondary h-48 flex justify-center items-center rounded-3xl'>
                <TypeAnimation
                    sequence={[
                        'Contact',
                        1000, 
                        'About',
                        1000,
                        'Contact',
                        1000,
                        'About',
                        1000
                    ]}
                    wrapper="span"
                    speed={25}
                    className='font-headerFont text-5xl text-jetBlack '
                    repeat={Infinity}
                    /><p className='font-headerFont text-5xl text-jetBlack'>  Me</p>
                    </div>

                    <div className='row-start-2 col-start-1 bg-poppyRed h-96 rounded-3xl'>
                        <h2 className='font-headerFont text-center text-3xl pt-2'>Professional Life</h2>
                        <p className='p-4 font-bodyFont'>After I completed a programming bootcamp in 2020 I joined a mid-sized digital marketing agency as a web developer and hosting technician. I quickly took on more responsibility, and became the Team Lead of the hosting department. Since then I have led a team to maintain over 400 sites on our servers.</p>
                        <p className='p-4 font-bodyFont'>I am now continuing my education in the field of Computer Science at Colorado State University Global</p>
                    </div>  
                    <div className='row-start-2 col-start-2 bg-sunYellow h-96 rounded-3xl'>
                    <h2 className='font-headerFont text-jetBlack text-center text-3xl pt-2'>Drop a line</h2>
                        <p className='p-4 text-jetBlack text-center font-headerFont'>Email: Micah.shumaker@gmail.com</p>
                        <div className='flex justify-evenly'>
                            <FaGithub size={32} className='text-jetBlack'/>
                            <FaLinkedinIn size={32} className='text-jetBlack'/>
                        </div>
                        <div className='flex justify-center items-center pt-8'><img className='h-1/2 w-1/2 rounded-full border border-secondary' src="profilepic.jpeg"></img></div>
                    </div>     
                    <div className='row-start-2 col-start-3 bg-skyBlue h-96 rounded-3xl'>
                    <h2 className='font-headerFont text-center text-3xl pt-2'>Personal Life</h2>
                        <p className='p-4 font-bodyFont'>I am a full-stack developer from Northern Colorado. Outside of work the dev world my time is well spent being with my family. I have a beautiful wife and 3 amazing kids.</p>
                        <p className='p-4 font-bodyFont'>I am a lifelong longer who is passionate about code!</p>
                     
                    </div> 
                    


            </div>
            
        </section>

    )
}