
export const TransButton = (props) =>{
  return(

    <button className=" cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-1 group relative overflow-hidden rounded-full px-6 py-3 font-medium border hover:bg-slate-200 dark:hover:bg-zinc-800 border-slate-200 dark:border-zinc-800">
  
  
  <span className="relative z-10 ">{props.children}</span>
</button>

  )
}
export const SeperateAllButton = (props) =>{
  return(
<button className="bg-orange-500 duration-200 cursor-pointer transition-transform ease-in hover:-translate-y-1 group relative overflow-hidden rounded-full px-6 py-3 font-medium  ">{props.children}</button>
  )
  
}
export const AllButton = (props) =>{
    return (

        <button style={{backgroundColor:props.bgColor, border: props.borderStyle, }} className="duration-200 cursor-pointer transition-transform ease-in hover:-translate-y-1 group relative overflow-hidden rounded-full px-6 py-3 font-medium">{props.children}</button>
    )
}
export const CustomButton = (props) =>{
    return(<button style={{backgroundColor:props.bgColor, border: props.borderStyle, }} className={props.classes}>{props.children}</button>)
}