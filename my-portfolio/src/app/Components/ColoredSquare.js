

export default function ColoredSquare(props){

    return(
        <div className={`overflow-hidden z-10
         ${props.rotate}
          ${props.animateDuration} 
          ${props.position} 
          ${props.right} 
          ${props.top}
           ${props.classHeight}
            ${props.classWidth}
             ${props.bgColor} 
             ${props.grid} rounded-[40px] hover:rounded-2xl
  transition-all duration-200 ease-linear `}><p className="text-jetBlack text-3xl font-headerFont text-center relative rotate-180">{props.text}</p></div>
    )
}