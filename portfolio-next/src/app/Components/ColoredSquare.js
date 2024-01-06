

export default function ColoredSquare(props){

    return(
        <div className={`overflow-hidden z-10 w-full h-full ${props.bgColor} ${props.position} rounded-[40px] hover:rounded-2xl
  transition-all duration-200 ease-linear m-aut`}>{props.text}</div>
    )
}