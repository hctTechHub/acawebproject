import {useState,useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import {Link} from "react-router-dom"
import AcaLogo from "../assets/Images/acaLogo.png"
const HeaderComponent = () => {

const [targetId,setTargetId] = useState("")
const [harmburger,setHarmburger] = useState(false)
const [hidden,setHidden] = useState(true)
const [yHeight,setHeight] = useState(0)
let targetHeight = 50;
const {ref,inView,entry} = useInView({
    threshold : 0
})

useEffect(() => {
        window.addEventListener('scroll',() => {
            let currentHeight = window.scrollY; //get the vertical height scrolled
            if(currentHeight >= targetHeight){
                setHeight(currentHeight)
                setHidden(false)
            }
            else{
                    setHeight(currentHeight)
            }
           
        }) 
    },[yHeight])

useEffect(() => {
        if(!inView){
            setHarmburger(false)
        }
},[inView])


    const handleMouseEnter = (e) => {
        console.log(e)
        //const targetId = e.target.id
        //setTargetId(targetId) 
          
    }
    const handleMouseLeave = () => {
            setTargetId('')
    }

    const handleMobileMenu = () => {
        setHarmburger((prev) =>{
            return !prev
        })
    }
    return(
        <>
            <div className="">
                {/**pre-header */}
               { targetId === ''  && <div className=" hidden lg:bg-amber-950   lg:flex lg:justify-between text-amber-100 py-3 px-4">
                    <div className="flex items-center sm:py-2 sm:px-2 space-x-2 px-4 text-sm "><img src={AcaLogo} width="40" alt="logo" /> <h5 className="font-extrabold text-lg">ACA</h5> </div>
                    <div className="md:flex items-center">
                        <p className="text-amber-100 text-sm md:text-md  px-2 relative lg:px-4 md:after:absolute md:after:top-0 md:after:right-0 md:after:h-3.5 md:after:bg-amber-100
                            md:after:w-0.5 transform md:after:translate-y-1.5"><span className="px-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg></span>
                            info@acaonefamily.com
                        </p>
                        <p className="text-amber-100 text-sm px-2 md:px-1.5 md:text-md"><span className="px-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                            </svg>
                            </span>+2348099814312, +234 818 627 2000  
                        </p>
                    </div>
                </div>
            }
                {/**Header with links*/}

                 <div onMouseLeave= {() => handleMouseLeave()} className={targetId !== ''  ? "fixed border-t-2 border-amber-950 w-full z-60 top-0 bg-amber-50/80 backdrop-blur-md shadow-lg" : "hidden bg-amber-100"}>
                    <div className="flex  w-[95%] mx-auto py-3">
                        <div className="py-4">
                            <img className="relative w-15 h-15" src={AcaLogo} alt="aca-logo" />
                            <h5 className="relative pb-2 text-xs tracking-widest text-amber-900 opacity-80 font-bold after:absolute after:w-1/2 after:mt-2 after:h-0.5 after:left-0 after:bottom-0   ">{targetId.toUpperCase()} ACA</h5>
                            <div className=" p-2 w-60 text-md text-amber-950 font-semibold">
                                <p>American Christian Academy (ACA) is an internationally accredited Christian school currently serving creche through twelfth grade students</p>
                            </div>
                        </div>
                        <div className="flex justify-end flex-grow">
                            {
                                targetId === "about" && <div className="px-32 py-4 flex w-full space-x-32">
                                    <div className="flex flex-col space-y-8">
                                        <div className="hover:cursor-pointer hover:rounded-lg hover:bg-amber-100  hover:p-2">
                                            <h5 className="hover:text-amber-950 text-amber-900 opacity-80 text-sm font-semibold tracking-widest ">Mission & Vision</h5>
                                            <p className="hover:text-gray-700 text-sm text-gray-600">Get a view of what ACA stands for</p>
                                        </div>
                                        <div className="hover:cursor-pointer hover:rounded-lg hover:bg-amber-100  hover:p-2">
                                            <h5 className="hover:text-amber-950 text-amber-900 opacity-80 text-sm font-semibold tracking-widest">Brief History Of ACA </h5>
                                            <p className="hover:text-gray-700 text-sm text-gray-600">The history that shapes us</p>
                                        </div>
                                        <div className="hover:cursor-pointer hover:rounded-lg hover:bg-amber-100  hover:p-2">
                                            <h5 className="hover:text-amber-950 text-amber-900 opacity-80 text-sm font-semibold tracking-widest ">Mission & Vision</h5>
                                            <p className="hover:text-gray-700 text-sm text-gray-600">Meet our founders & governing council</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-8">
                                        <div className="hover:cursor-pointer hover:rounded-lg hover:bg-amber-100  hover:p-2" >
                                            <h5 className="hover:text-amber-950 text-amber-900 opacity-80 text-sm font-semibold tracking-widest">ACA CREDO</h5>
                                            <p className="hover:text-gray-700 text-gray-600 text-sm">Get a view of what ACA stands for</p>
                                        </div>
                                        <div className="hover:cursor-pointer hover:rounded-lg hover:bg-amber-100  hover:p-2  ">
                                            <h5 className="hover:text-amber-950 text-amber-900 opacity-80 text-sm font-semibold tracking-widest ">Schedule a Visit</h5>
                                            <p className="hover:text-gray-700 text-gray-600 text-sm">Ready to explore our campus</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        <div className="space-x-6 text-amber-950">
                       </div>
                      </div>
                    </div> 
                    
                </div>

             
                   {/**Harmburger */}
                        <div ref={ref} className="fixed top-0 bg-amber-50/80 w-full z-50 backdrop-blur-md flex flex-col items-end flex-grow  p-2 lg:hidden" onClick={ () => handleMobileMenu()}>
                            <div className="flex w-full justify-between">
                                <div className="flex px-4 items-center justify-center space-x-2">
                                    <img src={AcaLogo} width="40" alt="logo" />
                                    <h5 className="font-extrabold">ACA</h5>
                                </div>
                                <div className="flex w-10  h-10 items-center justify-center bg-amber-950 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fffbeb" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-4 flex items-center w-[95%] mx-auto py-3">
                        {/*logo*/}
                        
                        <div className={harmburger ? "p-8 rounded-lg bg-amber-100 flex flex-col  w-full" : "hidden"}>
                        {/**Links */}
                        <div className={harmburger ? "sm:flex sm:flex-col" : " lg:flex lg:flex-grow lg:justify-between lg:flex-row text-sm  font-semibold  text-amber-950"}>
                            <Link to="/" className="relative sm:p-2 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left  after:bottom-0 after:left-2 after:h-0.5  after:bg-amber-950 transform hover:after:origin-right-left  after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">Home</Link>
                            <div className="w-full h-0.5  bg-amber-950 opacity-5 lg:hidden"></div> 
                            <Link to="/about" id="about" onMouseEnter = {(e) => handleMouseEnter(e)} className="relative sm:p-2 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">About</Link>
                            <div className="w-full h-0.5  bg-amber-950 opacity-5 lg:hidden"></div> 
                            <a href="#" className="relative sm:p-2 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">Academics</a>
                             <div className="w-full h-0.5  bg-amber-950 opacity-5 lg:hidden"></div> 
                            <a href="#" className="relative sm:p-2 sm:after:hidden lg:after:block  after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">Boarding</a>
                             <div className="w-full h-0.5 bg-amber-950 opacity-5 lg:hidden"></div> 
                            <a href="#" className="relative  sm:p-2 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">Admissions</a>
                             <div className="w-full h-0.5  bg-amber-950 opacity-5 lg:hidden"></div> 
                            <a href="#" className="relative sm:p-2 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">Gallery</a>
                             <div className="w-full h-0.5  bg-amber-950 opacity-5 lg:hidden"></div> 
                            <a href="#" className="relative sm:p-2 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">Careers</a>
                             <div className="w-full h-0.5  bg-amber-950 opacity-5 lg:hidden"></div> 
                            <a href="#" className="relative sm:pt-2 sm:pl-2 sm:pb-4 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">News & Updates</a>
                            {/** CTA*/} <div className="text-center bg-amber-950 rounded-full text-amber-100 px-5 py-3 text-sm tracking-widest"><p><strong className="font-bold">LOGIN</strong></p></div>
                      
                             </div> 
                            
                     </div>
                    </div> 
                </div>
                {/**Harmburger */}

              <div className={(yHeight > targetHeight ) ? "lg:fixed lg:w-full lg:z-50 lg:top-0 bg-amber-50/80 backdrop-blur-md " : "bg-amber-100"}>
                  
                    <div className="sm:p-4 lg:flex lg:items-center lg:w-[85%] lg:mx-auto  lg:py-3">
                        {/*logo*/}
                        
                        <div className={harmburger ? "sm:p-8 sm:rounded-lg sm:bg-amber-50 sm:flex sm:flex-col " : "sm:hidden sm:bg-transparent lg:bg-transparent lg:space-x-8  lg:flex lg:flex-row lg:items-center lg:justify-end lg:w-full"}>
                        {/**Links */}
                        <div className={harmburger ? "sm:flex sm:flex-col" : "lg:flex lg:flex-grow lg:justify-between lg:flex-row text-sm  font-semibold  text-amber-950"}>
                            <Link to="/" className="relative sm:p-2 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left  after:bottom-0 after:left-2 after:h-0.5  after:bg-amber-950 transform hover:after:origin-right-left  after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">Home</Link>
                            <div className="w-full h-0.5  bg-amber-950 opacity-5 lg:hidden"></div> 
                            <Link to="/about" id="about" onMouseEnter = {(e) => handleMouseEnter(e)} className="relative sm:p-2 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">About</Link>
                            <div className="w-full h-0.5  bg-amber-950 opacity-5 lg:hidden"></div> 
                            <a href="#" className="relative sm:p-2 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">Academics</a>
                             <div className="w-full h-0.5  bg-amber-950 opacity-5 lg:hidden"></div> 
                            <a href="#" className="relative sm:p-2 sm:after:hidden lg:after:block  after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">Boarding</a>
                             <div className="w-full h-0.5 bg-amber-950 opacity-5 lg:hidden"></div> 
                            <a href="#" className="relative  sm:p-2 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">Admissions</a>
                             <div className="w-full h-0.5  bg-amber-950 opacity-5 lg:hidden"></div> 
                            <a href="#" className="relative sm:p-2 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">Gallery</a>
                             <div className="w-full h-0.5  bg-amber-950 opacity-5 lg:hidden"></div> 
                            <a href="#" className="relative sm:p-2 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">Careers</a>
                             <div className="w-full h-0.5  bg-amber-950 opacity-5 lg:hidden"></div> 
                            <a href="#" className="relative sm:pt-2 sm:pl-2 sm:pb-4 sm:after:hidden lg:after:block after:absolute lg:pb-2 after:origin-left after:bottom-0 after:left-2 after:h-0.5 after:bg-amber-950 transform hover:after:origin-right-left after:w-full after:duration-500 after:scale-x-0 hover:after:scale-x-100">News & Updates</a>
                            {/** CTA*/} <div className="text-center bg-amber-950 rounded-full text-amber-100 px-5 py-3 text-sm tracking-widest"><p><strong className="font-bold">LOGIN</strong></p></div>
                      
                             </div> 
                            
                     </div>
                    </div> 
                    
                </div>
        </div>
        </>
    )
}

export default HeaderComponent