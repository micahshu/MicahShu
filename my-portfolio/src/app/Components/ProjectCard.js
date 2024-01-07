import { FaWordpressSimple } from "react-icons/fa6";


export default function ProjectCard(props){

    return (
        
            <div className={`border-${props.color} bg-${props.color} border m${props.margin}-10 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear hover:scale-105`}>
                    <img className="w-full rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear " src={props.src}></img>
                    <div className="flex flex-col justify-center align-text-top">
                    <FaWordpressSimple  className="m-auto mt-2 text-jetBlack" size={24} />
                        <h3 className="text-jetBlack font-headerFont text-2xl p-2  text-center">{props.text}</h3>
                        
                    </div>
                    
                </div>
        
    )
}