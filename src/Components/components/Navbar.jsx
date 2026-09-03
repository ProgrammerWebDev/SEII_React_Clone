import './Navbar.css'
import {Link} from "react-router-dom"
import {Heart} from "lucide-react"
import { Moon,Sun } from 'lucide-react'
import { useTheme } from './ThemeContext'

import { AllButton } from './Button'

const Button = (props) => {

    return(
        <button className='px-2 py-1  font-bold cursor-pointer'>{props.children}</button>
    )
}


export const Navbar = () => {
const {theme,toggleTheme } = useTheme();
  return (
<nav className='fixed top-0 left-1/2 -translate-x-1/2 w-screen h-16 z-1000 flex items-center justify-between px-8 backdrop-blur-lg overflow-x-hidden'>
  <span className='cursor-pointer'>
    <Heart size={48} color='var(--color-emerald-600)'/>
  </span>

  <ul className='absolute left-1/2 -translate-x-1/2  flex-row gap-6 items-center hidden sm:flex '>
      <li className='relative no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 hover:text-orange-500 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100'><a href="#about">About</a></li>
      <li className='relative no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 hover:text-orange-500 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100'><a href="#programs">Programs</a></li>
      <li className='link relative no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 hover:text-orange-500 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100'><Link to="/">Roots Fund</Link></li> 
      <li className='link relative no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 hover:text-orange-500 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100'><Link to="/">Blood Bank</Link></li>
      <li className='relative no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 hover:text-orange-500 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100'><a href="#impact">Impact</a></li>
      <li className='relative no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 hover:text-orange-500 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100'><a href="#get-involved">Get Involved</a></li>
      <li className='relative no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 hover:text-orange-500 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100'><a href="#contact">Contact</a></li>
  </ul>

  <span className='flex items-center gap-2'>
    <div onClick={toggleTheme} className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-full transition-background duration-75 hover:bg-zinc-600/20 ">
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-yellow-400" strokeWidth={1.5} />
      ) : (
        <Moon className="w-6 h-6 text-zinc-700" strokeWidth={1.5} />
      )}
    </div>
    <Button>Log In</Button>
    <AllButton bgColor="var(--color-orange-500)">Donate Now</AllButton>
  </span>
</nav>

  )
}
