import AcaHighSchool3 from "../assets/images/acaHighSchool3.jpg"
import AcaElementary from "../assets/images/acaElementary2.png"
import AcaHighSchool2 from "../assets/images/acaHighSchool2.jpg"
import AcaHighSchool1 from "../assets/images/acaHighSchool1.jpg"
import AcaElementary3 from "../assets/images/acaElementary3.png"

const AcademicsComponent = () => {



    return(
        <>
            <div className="pb-200 flex flex-col">
                <div className="relative mt-18 min-[600px]:max-[639px]:mt-20  min-[640px]:max-[768px]:mt-12 md:mt-12  lg:mt-0  w-full h-[250px]  lg:h-[500px]">
                    <img src={AcaHighSchool3} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-amber-950 opacity-80"></div>
                    <div className="absolute inset-0 lg:pt-20 flex flex-col items-left justify-center">
                        <h3 className="pl-8 pb-4 text-md lg:text-lg tracking-widest font-extrabold text-amber-100">ACADEMICS </h3>
                        <div className="relative h-2/3">
                            <div className="absolute top-0 z-10  mb-10  ml-8 lg:ml-8 p-4  rounded-lg lg:rounded-tr-4xl lg:rounded-bl-4xl  bg-amber-900 w-[300px] md:w-[400px] lg:w-[600px] opacity-90">
                                <p className="px-8 font-archivo lg:leading-10 text-md  lg:text-4xl  text-amber-50">Empowering Every Student For Academic Excellence</p>
                            </div>
                            <div className="absolute  z-0   rounded-br-full top-25 left-75  md:top-20 md:left-100 lg:top-33 lg:left-150 bottom-3 w-[50px] h-[55px] bg-amber-100"></div>
                        </div>
                    </div>
                </div>
                <div className="flex-1  min-h-screen px-12 flex-col space-y-40 pt-18 bg-amber-100 bg-gradient-to-b from-amber-100 to-amber-50">
                    <div className="flex space-x-8">
                         <div className="flex-1">
                                <h6 className="pb-4 text-amber-900 text-sm tracking-wide font-extrabold opacity-80">THE ACA LEARNING EXPERIENCE</h6>
                                <p className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-amber-950">Where Truth, Knowledge, and Wisdom Inspire Excellence.</p>
                              </div>
                              <div className="flex-1 leading-relaxed">
                                  <p className="text-amber-950 text-md">
                                      <span className="inline-block bg-amber-200 p-1"><strong>American Christian Academy (ACA)</strong></span> is dedicated to providing an excellent, student-centered education.
                                      The school fosters academic achievement, personal growth, and strong Christian values.
                                      Dedicated educators and supportive families work together to help every student succeed.
                                      A culture of innovation, accountability, and continuous improvement drives high standards.
                                      Students are equipped with the knowledge, character, and confidence to become future leaders.
            
                                  </p>
                              </div>
                    </div>

                    {/**Pre-School */}
                    <div className="pt-8">
                        <h6 className="text-amber-900 text-sm tracking-wide font-extrabold opacity-80">OUR SCHOOLS</h6>
                        <div className="pt-8 pb-20 flex h-screen space-x-8">
                            <div className="flex-1  flex flex-col">
                                    <div className="relative  flex-1 flex justify-center">
                                        <div className="p-4 flex flex-col w-1/2 h-2/3 rounded-xl drop-shadow-2xl drop-shadow-amber-200 bg-amber-900 text-amber-50">
                                            <div className="p-2 rounded-xl text-lg font-semibold bg-amber-50 text-amber-950"><h3>PRE-SCHOOL</h3></div>
                                        </div>
                                        <div className="absolute w-1/2 h-[70%] top-20 left-10 border-t-5 border-r-5 border-amber-50 rounded-xl overflow-hidden">
                                                <img src={AcaElementary} alt="img" className="h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1  leading-relaxed">
                                    <p className="text-amber-950 text-md">
                                        <span className="inline-block bg-amber-200 p-1"><strong>American Christian Academy (ACA)</strong></span> Pre-School provides a warm, nurturing, and stimulating environment where young learners develop strong foundations in literacy, numeracy, science, social studies, and creative arts. Through engaging activities, play-based learning, technology, and guided exploration, children build essential academic, social, and communication skills while developing confidence, curiosity, independence, and good character             
                                    </p>
                                    <a href="#" className="inline-block rounded-lg p-2 mt-2 bg-amber-950 text-amber-50">Learn more</a>
                                </div>
                        </div>

                        {/**Elementary School */}
                        <div className="pt-8 pb-32 flex h-screen space-x-8">
                            <div className="flex-1  leading-relaxed">
                                <h6 className="pb-2 text-amber-900 text-sm tracking-wide font-extrabold opacity-80">Elementary School</h6>
                                <p className="text-amber-950 text-md">
                                    <span className="inline-block bg-amber-200 p-1"><strong>American Christian Academy (ACA)</strong></span> Elementary School is dedicated to providing an excellent, student-centered education.
                                       ACA Elementary School provides a supportive and engaging learning environment where students build a strong foundation in English Language Arts, Mathematics, Science, Social Studies, Computer Studies, Creative Arts, and Physical Education. Through hands-on learning, technology, collaboration, and character development, students develop the knowledge, confidence, and critical-thinking skills needed for success in the next stage of their education.
                                </p>
                                <a href="#" className=" inline-block rounded-lg p-2 mt-2 bg-amber-950 text-amber-50">Learn more</a>
                            </div>
                            <div className="flex-1  flex flex-col">
                                    <div className="relative  flex-1 flex justify-end">
                                        <div className="p-4 flex flex-col w-1/2 h-2/3 rounded-xl drop-shadow-2xl drop-shadow-amber-300 bg-amber-900 text-amber-50">
                                            <div className="p-2 rounded-xl text-lg font-semibold bg-amber-50 text-amber-950"><h3>ELEMENTARY SCHOOL</h3></div>
                                        </div>
                                        <div className="absolute w-1/2 h-[70%] top-20 right-20 border-t-5 border-r-5 border-amber-50 rounded-xl overflow-hidden">
                                                <img src={AcaElementary3} className="h-full object-cover" alt="img"/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        {/**Middle School */}
                        <div className="pt-8 pb-20 flex h-screen space-x-8">
                            <div className="flex-1  flex flex-col">
                                    <div className="relative  flex-1 flex justify-center">
                                        <div className="p-4 flex flex-col w-1/2 h-2/3 rounded-xl drop-shadow-2xl drop-shadow-amber-200 bg-amber-900 text-amber-50">
                                            <div className="p-2 rounded-xl text-lg font-semibold bg-amber-50 text-amber-950"><h3>MIDDLE SCHOOL</h3></div>
                                        </div>
                                        <div className="absolute w-1/2 h-[70%] top-20 left-10 border-t-5 border-r-5 border-amber-50 rounded-xl overflow-hidden">
                                                <img src={AcaHighSchool2} alt="img" className="h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1  leading-relaxed">
                                    <p className="text-amber-950 text-md">
                                        <span className="inline-block bg-amber-200 p-1"><strong>American Christian Academy (ACA)</strong></span>
                                        Middle School offers a well-rounded academic programme that strengthens students’ knowledge and skills in English Language Arts, Mathematics, Science, Social Studies, Computer Studies, and the Arts, while encouraging independent thinking, collaboration, leadership, and personal responsibility. Students are prepared for increasingly challenging academic work and foundational assessments as they progress toward high school and internationally recognized programmes.
                                    </p>
                                    <a href="#" className="inline-block rounded-lg p-2 mt-2 bg-amber-950 text-amber-50">Learn more</a>
                                </div>
                        </div>

                        {/**High School */}
                        <div className="pt-8 pb-32 flex h-screen space-x-8">
                            <div className="flex-1  leading-relaxed">
                                <h6 className="pb-2 text-amber-900 text-sm tracking-wide font-extrabold opacity-80">HIGH SCHOOL</h6>
                                <p className="text-amber-950 text-md">
                                    <span className="inline-block bg-amber-200 p-1"><strong>American Christian Academy (ACA)</strong></span> 
                                    High School provides a rigorous and comprehensive education across English, Mathematics, Sciences, Social Studies, Languages, Computer Studies, and the Arts, preparing students for higher education and a rapidly changing world. Students are supported in pursuing internationally recognized qualifications and examinations, including SAT, PSAT, IGCSE, AP, and Cambridge A-Levels, while developing critical thinking, problem-solving, communication, leadership, and lifelong learning skills.
                                </p>
                                    <a href="#" className="inline-block p-2 mt-2 rounded-lg bg-amber-950 text-amber-50">Learn more</a>
                            </div>
                            <div className="flex-1  flex flex-col">
                                    <div className="relative  flex-1 flex justify-end">
                                        <div className="p-4 flex flex-col w-1/2 h-2/3 rounded-xl drop-shadow-2xl drop-shadow-amber-300 bg-amber-900 text-amber-50">
                                            <div className="p-2 rounded-xl text-lg font-semibold bg-amber-50 text-amber-950"><h3>HIGH SCHOOL</h3></div>
                                        </div>
                                        <div className="absolute w-1/2 h-[70%] top-20 right-20 border-t-5 border-r-5 border-amber-50 rounded-xl overflow-hidden">
                                                <img src={AcaHighSchool1} alt="img" className="h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                             
                        </div>
                        {/**ACA CLUBS */}
                           <div className="flex space-x-8">
                         <div className="flex-1">
                                <h6 className="pb-4 text-amber-900 text-sm tracking-wide font-extrabold opacity-80">OUR CLUBS</h6>
                                <p className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-amber-950">Beyond The Classroom, Discover Your Gifts</p>
                              </div>
                              <div className="flex-1 leading-relaxed">
                                  <p className="text-amber-950 text-md">
                                      <span className="inline-block bg-amber-200 p-1"><strong>American Christian Academy (ACA)</strong></span> is dedicated to providing an excellent, student-centered education.
                                      Students have an extensive range of clubs to choose from as extracurricular activities.
                                      Along with a wide variety of clubs available at ACA, Extended Learning classes are available for Pre School and Elementary School most days after school while Middle and High School holds every Monday. These academic clubs are free.
                                      If competent, students and parents are welcome to volunteer to teach a club of their interest.
                                  </p>
                                 <p className="pt-4 text-amber-950 font-semibold">Our clubs lncludes but not limited to:</p>
                                    <ul className="list-none px-12 space-y-4">
                                        <li className="relative text-amber-950"><div className="absolute -translate-x-12 rounded-full h-8 w-8 flex items-center justify-center bg-amber-950">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-amber-50 size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                            </svg>
                                            </div><div><strong>Sports:</strong> Badminton, Basketball, Cricket, Golf, Gymnastics, Soccer, Swimming, Table Tennis, Taekwondo, Tennis, Track, Volleyball.</div>
                                        </li>
                                         <li className="relative text-amber-950"><div className="absolute -translate-x-12 rounded-full h-8 w-8 flex items-center justify-center bg-amber-950">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-amber-50 size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                                            </svg>
                                            </div><div><strong>Arts:</strong> Arts and Craft, Christmas Craft, Crochet, Origami, Puppet Making, Stitches.</div>
                                        </li>
                                         <li className="relative text-amber-950"><div className="absolute -translate-x-12 rounded-full h-8 w-8 flex items-center justify-center bg-amber-950">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-amber-50 size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                            </svg>
                                            </div><div><strong>Performance:</strong> Ballet, Ballroom Dancing, Cheer Leading, Choir, Dance, Drama, Hip-Hop, Performing Arts, Speech & Debate</div>
                                        </li>
                                        <li className="relative text-amber-950"><div className="absolute -translate-x-12 rounded-full h-8 w-8 flex items-center justify-center bg-amber-950">
                                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-amber-50 size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                                            </svg>
                                            </div><div><strong>Music:</strong> Clarinet, Drums, Guitar, Piano, Recorder, Violin</div>
                                        </li>
                                        <li className="relative text-amber-950"><div className="absolute -translate-x-12 rounded-full h-8 w-8 flex items-center justify-center bg-amber-950">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-amber-50 size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                            </svg>
                                            </div><div><strong>Academics:</strong> Ben Carson, Computer, Creative Writing, Handwriting, Homework*, Proper English Pronunciation (PEP), Rem. Math, Rem. French</div>
                                        </li>

                                    </ul>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcademicsComponent