import AcaGroup from "../assets/images/acaGroup2.png"
import Admissions from '../assets/images/admissions.png'


const AdmissionComponent = () => {



    return(
            <div className="mb-[300px] flex flex-col">
               <div className="relative overflow-hidden bg-primary flex  flex-col sm:flex-col   min-h-[480px] md:min-h-[600px]">
                    <div className="mt-20 sm:mt-15 md:mt-15 lg:mt-15 flex items-center justify-start" >
                        <h6 className="pl-5 md:pl-25 lg:pl-25  pb-8 text-md md:text-3xl lg:text-xl  text-brand-light font-archivo">READY TO JOIN ACA?</h6>
                    </div> 
                    <div className="relative flex   h-[400px]">     
                        {/*<div className="absolute -bottom-4 right-10 sm:right-17 lg:right-19 lg:rounded-md rounded-md shadow-xl shadow-amber-600 bg-amber-100 w-20 h-20"  />*/}
                        <img className="relative  border-t-4 border-x-4 border-white mx-auto rounded-md  w-[85%]  h-full object-cover"  src={Admissions} alt="Group of graduating students jumping cheerfully" /> 
                        {/*<div className="absolute rounded-md inset-0 mx-auto w-[85%] bg-amber-900 opacity-20" />*/}
                    </div>
                    <div className="absolute h-full w-full inset-x-0 top-30 md:top-40 bg-gradient-to-b from-transparent via-primary to-primary"></div>
                        <div className="absolute bottom-20 md:bottom-10 w-full  flex flex-col">
                            <div className= "w-[90%] mx-auto flex flex-col items-start">
                                <div className="w-[90%] mx-auto flex flex-col">
                                    <h6 className="text-brand-light font-archivo text-3xl md:text-3xl lg:text-4xl ">ADMISSIONS</h6>
                                    <h5 className="text-md md:text-xl lg:text-2xl font-archivo text-amber-200">Your Journey Begins Here</h5>
                                </div> 
                                                                                
                                </div>
                            </div>
                        </div>
            
                        <div className="px-4 flex flex-col gap-8 lg:flex-row">
                            <div className="lg:flex-1 pt-12 flex flex-col lg:items-start lg:justify-center">
                                <h6 className="text-sm text-accentDark font-achivo font-extrabold tracking-wide">START YOUR JOURNEY AT ACA</h6>
                                <h4 className="text-4xl lg:text-6xl text-primary font-semibold">Excellence In Every Endeavour</h4>
                            </div>
                            <div className="lg:flex-1 text-secondaryDark lg:pt-12 lg:pr-8 text-md lg:text-lg">
                               <p>
                                    At <span className="bg-amber-100 p-1"><strong>American Christian Academy </strong></span>,
                                     we provide a holistic education that combines academic excellence with creativity, character development, and spiritual growth. Through a global curriculum, enriching extracurricular activities, and diverse clubs, students from Pre-School through High School are encouraged to discover their talents, develop critical thinking skills, and pursue their passions. Rooted in Christian values and a family-oriented environment, we nurture every child to grow confidently and reach their full potential.  </p>                           
                                
                            </div>
                           
                        </div>
                        <div className="mt-16 lg:mt-24 py-4 flex flex-col gap-8  lg:flex-row justify-center h-[800px] min-[500px]:max-[639px]:h-[800px] sm:h-[750px] lg:h-[450px] w-full bg-primary">
                            <div className="px-8 flex  flex-col justify-center h-full w-full lg:w-[40%]">
                                  <div className="pt-4 relative h-full lg:h-[75%]">

                                    <img src={AcaGroup} className="border-t-4 border-x-4 border-white rounded-md object-cover h-full" />
                                          <div className="absolute bottom-0 lg:bottom-0 w-full h-[50%]  bg-gradient-to-b  from-transparent  via-primary  to-primary"/>
                                         <h4 className="text-2xl w-[85%] sm:w-[70%] lg:before:block before:h-full before:hidden lg:before:w-1.5  before:absolute before:left-0 before:bg-white lg:pl-4 absolute leading-5.5 bottom-6 font-archivo text-brand-light md:text-2xl">WE ARE NOT JUST A SCHOOL WE'RE A <span className="text-amber-200">FAMILY SCHOOL</span></h4>
                               </div>
                            </div>
                            <div className="flex flex-col px-4 lg:px-0  lg:pt-4 w-full lg:w-[50%]">
                                <div className="grid gap-4 h-[400px] sm:h-[350px] grid-cols-1  w-full sm:gap-4 sm:grid-cols-2 sm:grid-rows-2"> 
                                    <div className="flex flex-col items-center rounded-md border-2 border-white  justify-center  text-center bg-primary font-archivo text-brand-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 sm:size-12">
                                        <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
                                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                    </svg>
                                    <h4 className="text-xl">TEAM OF EXPERIENCED TEACHERS</h4> </div>
                                    <div className="flex flex-col items-center justify-center text-center rounded-md  border-2 border-white bg-primary font-archivo text-brand-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 sm:size-12">
                                            <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" />
                                            <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                                        </svg>
                                       <h4 className="text-xl">TECHNOLOGY DRIVEN</h4></div>
                                    <div className="flex flex-col items-center justify-center text-center border-2 border-white rounded-md bg-primary  font-archivo text-brand-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 sm:size-12">
                                            <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
                                        </svg>
                                       <h4 className="text-xl">FAITH BASED</h4></div>
                                    <div className="flex flex-col border-2 border-white items-center justify-center text-center rounded-md  bg-primary font-archivo text-brand-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 sm:size-12">
                                            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                                        </svg>
                                      <h4 className="text-xl">COMMUNITY OF ALUMNI</h4></div>
                                </div>
                            </div>

                        </div>
                    
            </div>
    )
}


export default AdmissionComponent