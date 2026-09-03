const Card = (props) => {
    const Icon = props.icon;
    const Button = props.buttonType
  return (
            <div className=" justify-between flex flex-col gap-4 p-8 rounded-xl text-left max-w-[30vw] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm min-h-100">
                                <div className="px-1 py-1 rounded-2xl  bg-white dark:bg-zinc-900 h-14 w-14 flex justify-center  items-center  border border-zinc-200 dark:border-zinc-800 ">
                    <Icon></Icon>
                </div>
                
                <h3 className="text-2xl font-bold">{props.title}</h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400">{props.description}</p>
                
                
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                    {props.children}
                </div>
                <Button>{props.buttonText}</Button>
            </div>
  )
}

export default Card