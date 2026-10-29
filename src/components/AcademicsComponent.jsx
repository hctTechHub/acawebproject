import AcaHighSchool3 from "../assets/images/acaHighSchool3.jpg"
import AcaElementary from "../assets/images/acaElementary2.png"
import AcaHighSchool2 from "../assets/images/acaHighSchool2.jpg"
import AcaHighSchool1 from "../assets/images/acaHighSchool1.jpg"
import AcaElementary3 from "../assets/images/acaElementary3.png"
import sport from "../assets/images/sport.png"
import performance from "../assets/images/performance.png"
import lab from "../assets/images/lab.jpg"

const AcademicsComponent = () => {



    return(
        <>
            <div className=" flex flex-col">
              <div className="relative overflow-hidden bg-primary flex  flex-col sm:flex-col   min-h-[480px] md:min-h-[600px]">
                                  <div className="mt-20 sm:mt-15 md:mt-15 lg:mt-15 flex items-center justify-start" >
                                        <h6 className="pl-5 md:pl-25 lg:pl-25  pb-8 text-md md:text-3xl lg:text-xl  text-brand-light font-archivo">LEARNING AT ACA</h6>
                                   </div> 
                                  <div className="relative flex   h-[400px]">     
                                        {/*<div className="absolute -bottom-4 right-10 sm:right-17 lg:right-19 lg:rounded-md rounded-md shadow-xl shadow-amber-600 bg-amber-100 w-20 h-20"  />*/}
                                        <img className="relative border-t-4 border-x-4 border-white mx-auto rounded-md  w-[85%]  h-full object-cover"  src={AcaHighSchool3}  /> 
                                        {/*<div className="absolute rounded-md inset-0 mx-auto w-[85%] bg-amber-900 opacity-20" />*/}
                                   </div>
                                             
                                  <div className="absolute h-full w-full inset-x-0 top-30 md:top-40 bg-gradient-to-b from-transparent via-primary to-primary"></div>
                                   <div className="absolute bottom-20 md:bottom-10 w-full  flex flex-col">
                                                  <div className= "w-[90%] mx-auto flex flex-col items-start">
                                                    <div className="w-[90%] mx-auto flex flex-col">
                                                        <h6 className="text-brand-light font-archivo text-3xl md:text-3xl lg:text-4xl ">ACADEMICS</h6>
                                                        <h5 className="text-md md:text-xl lg:text-2xl font-archivo text-amber-200">Empowering Every Student For Academic Excellence</h5>
                                                     </div> 
                                                     
                                      </div>
                                  </div>
                              </div>
                <div className="flex-1  min-h-screen px-12 flex-col space-y-10  md:space-y-10 lg:space-y-30 pt-18 bg-white">
                    <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row  lg:space-x-8">
                         <div className="flex-1">
                                <h6 className="pb-4 text-accentDark text-sm tracking-wide font-extrabold">THE ACA LEARNING EXPERIENCE</h6>
                                <p className="text-4xl sm:text-4xl lg:text-6xl font-semibold text-primary">Where Truth, Knowledge, and Wisdom Inspire Excellence.</p>
                              </div>
                              <div className="flex-1 leading-relaxed">
                                  <p className="text-accentDark text-md lg:text-lg">
                                      <span className="inline-block bg-amber-100 p-1"><strong>American Christian Academy (ACA)</strong></span> is dedicated to providing an excellent, student-centered education.
                                      The school fosters academic achievement, personal growth, and strong Christian values.
                                      Dedicated educators and supportive families work together to help every student succeed.
                                      A culture of innovation, accountability, and continuous improvement drives high standards.
                                      Students are equipped with the knowledge, character, and confidence to become future leaders.
            
                                  </p>
                              </div>
                    </div>

                    {/**Pre-School */}
                    <div className="pt-8 lg:pt-0 flex flex-col">
                         <h6 className="pb-4 text-accentDark text-sm tracking-wide font-extrabold">OUR SCHOOLS</h6>
                        <div className="flex flex-col gap-16">
                            <div className="pt-4 pb-1  w-full lg:pt-0 md:pb-0  flex flex-col gap-8  lg:flex-row">
                                <div className="h-[350px] md:h-[500px] md:flex-1 bg-accentDark grid grid-cols-1 rounded-md">
                                        {/*<div className="py-2 pl-8 rounded-xl text-md lg:text-lg font-semibold text-brand-light "><h3>PRE-SCHOOL</h3></div>*/}
                                        <div className="w-[95%] md:w-[95%]  mx-auto overflow-hidden">
                                            <div className="py-2 pl-8 rounded-xl text-md lg:text-lg font-semibold text-brand-light "><h3>PRE-SCHOOL</h3></div>
                                            <img src={AcaElementary} className="border-2 border-brand-light h-[85%] w-[95%] md:h-[85%] md:w-[95%] my-auto mx-auto  rounded-md object-cover" />
                                         </div>   
                                    </div>
                                    <div className="md:flex-1 flex  items-center leading-relaxed">
                                        <p className="text-accentDark text-md lg:text-lg">
                                            <span className="inline-block bg-amber-100 p-1"><strong>American Christian Academy (ACA)</strong></span> Pre-School provides a warm, nurturing, and stimulating environment where young learners develop strong foundations in literacy, numeracy, science, social studies, and creative arts. Through engaging activities, play-based learning, technology, and guided exploration, children build essential academic, social, and communication skills while developing confidence, curiosity, independence, and good character.             
                                        </p>
                                    </div>
                            </div>

                        {/**Elementary School */}
                         <div className="pt-4 pb-1  w-full lg:pt-0 md:pb-0  flex flex-col gap-8  lg:flex-row"> 
                            <div className="order-2 md:order-2 lg:order-1 md:flex-1 flex  items-center leading-relaxed">
                                        <p className="text-accentDark text-md lg:text-lg">
                                            <span className="inline-block bg-amber-100 p-1">
                                                 <strong>American Christian Academy (ACA)</strong></span> Elementary School is dedicated to providing an excellent, student-centered education.
                                       ACA Elementary School provides a supportive and engaging learning environment where students build a strong foundation in English Language Arts, Mathematics, Science, Social Studies, Computer Studies, Creative Arts, and Physical Education. Through hands-on learning, technology, collaboration, and character development, students develop the knowledge, confidence, and critical-thinking skills needed for success in the next stage of their education.
                                      </p>
                                    </div>
                                <div className="order-1 md:order-1 h-[350px] md:h-[500px] md:flex-1 bg-primary grid grid-cols-1 rounded-md">
                                        {/*<div className="py-2 pl-8 rounded-xl text-md lg:text-lg font-semibold text-brand-light "><h3>PRE-SCHOOL</h3></div>*/}
                                        <div className="w-[95%] md:w-[95%]  mx-auto overflow-hidden">
                                            <div className="py-2 pl-8 rounded-xl text-md lg:text-lg font-semibold text-brand-light "><h3>ELEMENTARY SCHOOL</h3></div>
                                            <img src={AcaElementary3} className="border-2 border-brand-light h-[85%] w-[95%] md:h-[85%] md:w-[95%] my-auto mx-auto  rounded-md object-cover" />
                                         </div>   
                                    </div>
                                   
                            </div>

                    
 
                        {/**Middle School */}
                         <div className="pt-4 pb-1  w-full lg:pt-0 md:pb-0  flex flex-col gap-8  lg:flex-row"> 
                            <div className="order-1 md:order-1 h-[350px] md:h-[500px] md:flex-1 bg-accentDark grid grid-cols-1 rounded-md">
                                        {/*<div className="py-2 pl-8 rounded-xl text-md lg:text-lg font-semibold text-brand-light "><h3>PRE-SCHOOL</h3></div>*/}
                                        <div className="w-[95%] md:w-[95%]  mx-auto overflow-hidden">
                                            <div className="py-2 pl-8 rounded-xl text-md lg:text-lg font-semibold text-brand-light "><h3>MIDDLE SCHOOL</h3></div>
                                            <img src={AcaHighSchool2} className="border-2 border-brand-light h-[85%] w-[95%] md:h-[85%] md:w-[95%] my-auto mx-auto  rounded-md object-cover" />
                                         </div>   
                                    </div>
                            <div className="order-2 md:order-1 md:flex-1 flex  items-center leading-relaxed">
                                        <p className="text-accentDark text-md lg:text-lg">
                                            <span className="inline-block bg-amber-100 p-1">
                                                  <strong>American Christian Academy (ACA)</strong></span>
                                        Middle School offers a well-rounded academic programme that strengthens students’ knowledge and skills in English Language Arts, Mathematics, Science, Social Studies, Computer Studies, and the Arts, while encouraging independent thinking, collaboration, leadership, and personal responsibility. Students are prepared for increasingly challenging academic work and foundational assessments as they progress toward high school and internationally recognized programmes.
                                     </p>
                                    </div>
                                
                                   
                            </div>

                          

                        {/**High School */}
                        <div className="pt-4 pb-1  w-full lg:pt-0 md:pb-0  flex flex-col gap-8  lg:flex-row"> 
                             <div className="order-2 md:order-2 lg:order-1 md:flex-1 flex  items-center leading-relaxed">
                                        <p className="text-accentDark text-md lg:text-lg">
                                            <span className="inline-block bg-amber-100 p-1">
                                                <strong>American Christian Academy (ACA)</strong></span> 
                                    High School provides a rigorous and comprehensive education across English, Mathematics, Sciences, Social Studies, Languages, Computer Studies, and the Arts, preparing students for higher education and a rapidly changing world. Students are supported in pursuing internationally recognized qualifications and examinations, including SAT, PSAT, IGCSE, AP, and Cambridge A-Levels, while developing critical thinking, problem-solving, communication, leadership, and lifelong learning skills.
                                   
                                                  </p>
                                    </div> 
                            <div className="order-1 md:order-1 h-[350px] md:h-[500px] md:flex-1 bg-primary grid grid-cols-1 rounded-md">
                                        {/*<div className="py-2 pl-8 rounded-xl text-md lg:text-lg font-semibold text-brand-light "><h3>PRE-SCHOOL</h3></div>*/}
                                        <div className="w-[95%] md:w-[95%]  mx-auto overflow-hidden">
                                            <div className="py-2 pl-8 rounded-xl text-md lg:text-lg font-semibold text-brand-light "><h3>HIGH SCHOOL</h3></div>
                                            <img src={AcaHighSchool1} className="border-2 border-brand-light h-[85%] w-[95%] md:h-[85%] md:w-[95%] my-auto mx-auto  rounded-md object-cover" />
                                         </div>   
                                    </div>         
                            </div>
                    </div>
                        {/**ACA CLUBS */}
                           <div className="pt-24 flex flex-col lg:flex-row lg:space-x-12">
                         <div className="flex-col flex-1">
                                <h6 className="pb-4 text-accentDark text-sm tracking-wide font-extrabold">OUR CLUBS</h6>
                                <p className="pb-4 text-4xl sm:text-4xl lg:text-5xl font-semibold text-primary">Beyond The Classroom, Discover Your Gifts</p>
                                <div className="p-8 grid rounded-md bg-accentDark grid-cols-3 gap-4 grid-rows-2 h-[400px]">
                                    <div className="row-span-2 col-span-3 md:row-span-2 md:col-span-1 lg:col-span-1 border-2 border-white rounded-xl overflow-hidden shadow-2xl">
                                        <img src={sport} className="h-full w-full object-cover object-left"  alt='img' />
                                    </div>
                                    <div className="hidden md:block md:row-span-2  md:col-span-1 lg:col-span-1 lg:block lg:row-span-2 border-2 border-white rounded-xl overflow-hidden shadow-2xl">
                                        <img src={sport} className="h-full w-full object-cover object-center" alt='img' />
                                    </div>
                                    <div className="hidden md:block md:row-span-2 lg:block lg:row-span-2 border-2 border-white rounded-xl overflow-hidden shadow-2xl">
                                        <img src={sport} className="h-full w-full object-cover object-right" alt='img' />
                                    </div>
                                </div>
                              </div>
                              <div className="pt-4 flex-1 leading-relaxed">
                                  <p className="text-accentDark text-md lg:text-lg">
                                      <span className="inline-block bg-amber-100 p-1"><strong>American Christian Academy (ACA)</strong></span> is dedicated to providing an excellent, student-centered education.
                                      Students have an extensive range of clubs to choose from as extracurricular activities.
                                      Along with a wide variety of clubs available at ACA, Extended Learning classes are available for Pre School and Elementary School most days after school while Middle and High School holds every Monday. These academic clubs are free.
                                      If competent, students and parents are welcome to volunteer to teach a club of their interest.
                                  </p>
                                 <p className="pt-4 text-primary font-semibold text-md lg:text-lg">Our clubs lncludes but not limited to:</p>
                                    <ul className="list-none px-12 space-y-4 text-md lg:text-lg">
                                        <li className="relative text-accentDark"><div className="absolute -translate-x-12 rounded-full h-8 w-8 flex items-center justify-center bg-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-brand-light size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                            </svg>
                                            </div><div><strong>Sports:</strong> Badminton, Basketball, Cricket, Golf, Gymnastics, Soccer, Swimming, Table Tennis, Taekwondo, Tennis, Track, Volleyball.</div>
                                        </li>
                                         <li className="relative text-accentDark"><div className="absolute -translate-x-12 rounded-full h-8 w-8 flex items-center justify-center bg-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-brand-light size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                                            </svg>
                                            </div><div><strong>Arts:</strong> Arts and Craft, Christmas Craft, Crochet, Origami, Puppet Making, Stitches.</div>
                                        </li>
                                         <li className="relative text-accentDark"><div className="absolute -translate-x-12 rounded-full h-8 w-8 flex items-center justify-center bg-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-brand-light size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                            </svg>
                                            </div><div><strong>Performance:</strong> Ballet, Ballroom Dancing, Cheer Leading, Choir, Dance, Drama, Hip-Hop, Performing Arts, Speech & Debate</div>
                                        </li>
                                        <li className="relative text-accentDark"><div className="absolute -translate-x-12 rounded-full h-8 w-8 flex items-center justify-center bg-primary">
                                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-brand-light size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                                            </svg>
                                            </div><div><strong>Music:</strong> Clarinet, Drums, Guitar, Piano, Recorder, Violin</div>
                                        </li>
                                        <li className="relative text-amber-accentDark"><div className="absolute -translate-x-12 rounded-full h-8 w-8 flex items-center justify-center bg-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-brand-light size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                            </svg>
                                            </div><div><strong>Academics:</strong> Ben Carson, Computer, Creative Writing, Handwriting, Homework*, Proper English Pronunciation (PEP), Rem. Math, Rem. French</div>
                                        </li>

                                    </ul>
                              </div>
                        </div>
                        {/**ACA students achievements*/}
                        <div className="pt-20 lg:pt-36 pb-50 lg:pb-50">
                            <h6 className="pb-4 text-accentDark text-sm tracking-wide font-extrabold">ACADEMIC ACHIEVEMENTS</h6>
                            <div className="flex flex-col lg:flex-row  lg:space-x-12">
                                <div className="flex-1 text-accentDark text-md lg:text-lg">
                                    <p className="text-md leading-relaxed">At ACA, we believe our students are gifted with remarkable intelligence, talent, and potential. Year after year, they demonstrate academic excellence through outstanding performances in examinations, competitions, and various fields of learning, earning recognition both within and beyond our school community. We celebrate not only the awards, distinctions, and achievements that reflect their excellence, but also the dedication, perseverance, discipline, and hard work behind every success. Above all, we give God the glory for the wisdom, abilities, and opportunities that enable our students to strive for excellence and make a meaningful impact in the world.</p>
                                </div>
                                <div className="mt-8 lg:mt-0 relative flex-1">
                                        <div className="absolute h-6 w-6 lg:h-8 lg:w-8 bg-brand-light left-2 top-2"></div>
                                        <div className="flex items-center justify-center h-full rounded-xl bg-primary text-brand-light">
                                                <p className="p-8 md:leading-relaxed text-2xl md:text-4xl text-center lg:leading-12.5">Celebrating Bright Minds and Bold Achievements</p>
                                        </div>
                                         <div className="absolute h-6 w-6 lg:h-8 lg:w-8 bg-brand-light right-2 bottom-2"></div>
                                </div>
                            </div>
                            <div className="pt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
                                <div className="relative rounded-xl overflow-hidden">
                                    <div className="p-8 absolute bottom-0   text-brand-light w-full bg-primary">
                                       <h4 className="text-center font-semibold">IGCSE Best in Nigeria Award</h4>
                                    </div>
                                    <div className=""> 
                                        <img src={AcaElementary} alt="img"></img>
                                    </div>

                                </div>
                                <div className="relative rounded-xl overflow-hidden">
                                    <div className="p-8 absolute bottom-0   text-brand-light w-full bg-primary">
                                       <h4 className="text-center font-semibold">IGCSE Best in Nigeria Award</h4>
                                    </div>
                                    <div className=""> 
                                        <img src={AcaElementary} alt="img"></img>
                                    </div>

                                </div>
                                 <div className="relative rounded-xl overflow-hidden ">
                                    <div className="p-8 not-last:absolute bottom-0   text-brand-light w-full bg-primary">
                                       <h4 className="text-center font-semibold">IGCSE Best in Nigeria Award</h4>
                                    </div>
                                    <div className=""> 
                                        <img src={AcaElementary} alt="img"></img>
                                    </div>

                                </div>
                                
                                
                                
                                


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcademicsComponent