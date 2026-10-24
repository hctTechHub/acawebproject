import WellSpringImg from '../assets/images/wellSpring1.png'
import AcaHighSchool2 from '../assets/images/acaHighSchool2.jpg'
import AcaHighSchool3 from '../assets/images/acaHighSchool3.jpg'


const AdmissionComponent = () => {



    return(
            <>
                <div className="mb-[1500px] bg-primary flex h-[400px] min-h-[600px]">
                    <div className="relative mt-20 flex flex-col flex-1 h-[320px] ">
                        <div className="mt-15 flex items-center justify-center" >
                            <h6 className="ml-10 text-3xl text-amber-100 font-archivo">YOUR JOURNEY BEGINS HERE</h6>
                        </div>
                        <div className= "w-[90%] mx-auto absolute top-30 -right-4 py-5  px-5 z-1 border-8  border-amber-950 bg-secondary">
                            
                            <h6 className="text-primary font-archivo text-3xl ">Ready to join ACA?</h6>
                            <h5 className="text-2xl">We can't wait to have you</h5>
                            <div className="mt-5 py-5 px-10 flex items-center gap-4 rounded-md bg-gray-100/80 backdrop-blur-lg">
                                <span className="text-lg text-amber-950">Start You Application Today</span>
                                <span className="px-5 py-2 flex gap-2 items-center rounded-md text-amber-50 shadow shadow-lg bg-amber-600 block">Apply Now
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-25 flex justify-left flex-1  h-[400px]">
                       
                       
                        <div className="absolute -bottom-4 right-19 rounded-md shadow-xl shadow-amber-900 bg-amber-100 w-20 h-20"  />
                        <img className="relative rounded-md w-[85%]  h-full"  src={AcaHighSchool3} /> 
                        <div className="absolute rounded-md inset-0 w-[85%]  bg-amber-900 opacity-30" />
                        
                       
                    </div>
                </div>
            </>
    )
}


export default AdmissionComponent