import AcaGroup2 from "../assets/images/acaGroup2.png"
import HeadOfSchool from "../assets/images/Head-of-school.webp"
import boardMember1 from "../assets/images/boardMember1.png"
import boardMember2 from "../assets/images/boardMember2.webp"
import boardMember3 from "../assets/images/boardMember3.png"
import boardMember4 from "../assets/images/boardMember4.png"

const AboutComponent = () => {



    return(
        <>
            <div className="pb-20">
            <div className="bg-primary flex  flex-col sm:flex-col  h-[400px] min-h-[950px]">
                                  <div className="mt-20 sm:mt-15 md:mt-15 lg:mt-15 flex items-center justify-start" >
                                        <h6 className="pl-10 md:pl-25 lg:pl-25  pb-8 text-lg md:text-3xl lg:text-3xl  text-brand-light font-archivo">WANT TO LEARN ABOUT ACA?</h6>
                                    </div>
                                <div className="relative flex justify-left flex-1  h-[400px]">     
                                    {/*<div className="absolute -bottom-4 right-10 sm:right-17 lg:right-19 lg:rounded-md rounded-md shadow-xl shadow-amber-600 bg-amber-100 w-20 h-20"  />*/}
                                    <img className="relative mx-auto border-8 border-white rounded-md w-[85%]  h-full object-cover"  src={AcaGroup2}  /> 
                                    <div className="absolute rounded-md inset-0 mx-auto w-[85%] bg-amber-900 opacity-30" />
                                </div>
                                <div className="mt-20  flex flex-col flex-1 h-[320px] ">
                                    <div className= "w-[90%] mx-auto py-5  px-5   rounded-md bg-white">
                                        <h6 className="text-primary font-archivo text-3xl ">RAISING LEADERS</h6>
                                        <h5 className="text-2xl md:text-xl text-accentDark">Nurturing excellence in learning.</h5>
                                        <div className="mt-5 py-5 px-10 flex md:flex-col items-center gap-4 rounded-md bg-primary ">
                                            <span className="text-lg text-amber-50">Start You Application Today</span>
                                            <span className="px-5 py-2 flex gap-2 items-center rounded-md text-amber-50 shadow shadow-lg bg-amber-600 block">Apply Now
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                    <path fill-rule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/*<div className="relative mt-18 min-[600px]:max-[639px]:mt-20  min-[640px]:max-[768px]:mt-12 md:mt-12  lg:mt-0  w-full h-[250px]  lg:h-[500px]">
                    <img src={AcaGroup} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-amber-950 opacity-80"></div>
                    <div className="absolute inset-0 lg:pt-20 flex flex-col items-left justify-center">
                            <h3 className="pl-8 pb-4 text-md lg:text-lg tracking-widest font-extrabold text-amber-100">ABOUT US </h3>
                            <div className="relative h-2/3">
                                <div className="absolute top-0 z-10  mb-10  ml-8 lg:ml-8 p-4  rounded-lg lg:rounded-tr-4xl lg:rounded-bl-4xl  bg-amber-900 w-[300px] md:w-[400px] lg:w-[600px] opacity-90">
                                    <p className="px-8 font-archivo lg:leading-10 text-md  lg:text-4xl  text-amber-50">Committed to nurturing excellence in learning, leadership, and life.</p>
                                </div>
                                <div className="absolute  z-0   rounded-br-full top-25 left-75  md:top-20 md:left-100 lg:top-33 lg:left-150 bottom-3 w-[50px] h-[55px] bg-amber-100"></div>
                            </div>
                    </div>
                  </div> */}
                <div className="px-8 pt-16 sm:pt-32 lg:pt-32 pb-32 bg-white">
                        <h6 className="pb-4 text-accentDark text-sm tracking-wide font-extrabold">OUR JOURNEY</h6>
                        <div className="flex space-x-8 ">
                            <div className="flex-1 text-amber-950 text-md">
                                <p className="text-md leading-relaxed"><span className="inline-block bg-amber-100 p-1"><strong>American Christian Academy (ACA)</strong></span> began its journey on May 9, 1991, as Shell Close School, with just nine elementary students from six countries learning in a single classroom at the founder's home in Onireke, Ibadan. Built on a foundation of Christian values, academic excellence, and a family-centered culture, the school quickly grew into a vibrant international learning community. As enrollment expanded, the school became American Christian Academy in 1996, continually investing in modern facilities, globally recognized academic programs, and innovative learning opportunities that prepare students to excel both locally and internationally.
                                    For more than three decades, ACA has remained committed to developing the whole child through outstanding academics, leadership, arts, sports, and character development. As an official Cambridge and U.S. College Board test center, the school has consistently produced exceptional academic achievements while nurturing students to become compassionate, confident, and globally minded leaders. Today, ACA continues to build on its rich legacy, equipping every student with the wisdom, skills, and faith needed to live purposeful lives and make a lasting impact around the world.
                                </p>
                            </div>
                        </div>
                </div>
                <div className="bg-primary">
                    <div className="p-8 w-full sm:w-full md:w-[60%] lg:w-1/2">
                        <p className="font-archivo text-3xl tracking-wide sm:text-3xl lg:text-4xl font-semibold text-brand-light">Guided by Vision, Driven by Purpose.</p>
                    </div>
                    <div className="p-8 flex w-full flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
                        <div className="p-8   flex-1 shadow-2xl  rounded-lg bg-white flex flex-col text-primary">
                            <div className="pb-4 flex  items-center  space-x-2">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                                <h5 className="text-2xl  font-semibold"> Our Vision</h5>
                            </div>
                            <div className="flex">
                                <div className="mt-[0.2em] w-3  lg:w-4 md:self-stretch lg:h-[90%] bg-primary"></div>
                                <p className="pl-3 text-md text-secondaryDark">We glorify God by combining His truth with knowledge in a friendly & intellectually stimulating environment, so that students are equipped with wisdom for a purposeful life.</p>
                            </div>
                        </div>
                        <div className="p-8  flex-1 shadow-2xl rounded-lg flex flex-col bg-white text-primary">
                            <div className="pb-4  flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>

                                <h5 className="text-2xl font-semibold">Our Mission</h5>
                            </div>
                            <div className="flex">
                                <div className="mt-[0.2em] w-3 lg:w-4 md:self-stretch lg:h-[90%] bg-primary"></div>
                                <p className="pl-3 text-md text-secondaryDark">We provide a caring community dedicated to discovering the God-given gifts within our students & inspiring them to achieve their optimal potential, while maintaining high moral & academic standards worthy of exemplary world citizens.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-8 pt-32 pb-16 lg:pb-32 bg-white">
                    <h6 className="pb-4 text-accentDark text-sm tracking-wide font-extrabold">ACA CREDO</h6>
                      <div className="flex flex-col lg:flex-row lg:space-x-8">
                        <div className="flex-1 flex-col space-y-8 jusitfy-center">
                            <p className="text-4xl font-semibold sm:text-4xl lg:text-6xl  text-primary">Raising Leaders of Integrity and Excellence.</p>
                            <p className="text-md leading-relaxed"><span className="p-2 inline-block bg-amber-100"><strong> At American Christian Academy (ACA) </strong></span> Our credo is a commitment to cultivating faith, character, wisdom, and excellence in every student, preparing them for a life of purpose and service.</p>
                        </div>
                        <div className="flex-1">
                            <ul className="list-none  mt-5 pl-2 lg:pl-5 space-y-2 text-md lg:text-md">
                                <li className="flex items-center gap-2">
                                    <span className="bg-primary rounded-lg p-2 text-brand-light"><strong>A</strong></span>bsolute integrity in all things, showing respect for everyone.
                                </li>
                                 <li className="flex items-center gap-2">
                                     <span className="bg-primary p-2 rounded-lg text-brand-light"><strong>C</strong></span>reative ingenuity and independent thinking
                                </li>
                                <li className="flex items-center gap-2">
                                      <span className="bg-primary p-2 rounded-lg text-brand-light"><strong>A</strong></span>spiration for personal improvement and professional development.
                                </li>
                                 <li className="flex items-center gap-2">
                                     <span className="bg-primary p-2 rounded-lg text-brand-light"><strong>D</strong></span>iligence and promptness in completing all assigned tasks.
                                </li>
                                 <li className="flex items-center gap-2">
                                      <span className="bg-primary p-2 rounded-lg text-brand-light"><strong>E</strong></span>xcellence in every endeavor.
                                </li>
                                <li className="flex items-center gap-2">
                                      <span className="bg-primary p-2 rounded-lg text-brand-light"><strong>M</strong></span>aximum use and careful preservation of available resources.
                                </li>
                                 <li className="flex items-center  gap-2">
                                    <span className="bg-primary p-2 rounded-lg text-brand-light"><strong>Y</strong></span>early and continuous self-assessment, welcoming correction and suggestion.
                                </li>
                            </ul>
                        </div>
                      </div>  
                </div>
                <div className="px-8 pb-16 lg:pb-32 bg-primary">
                    <h6 className="pt-4 pb-4 text-brand-light text-sm tracking-wide font-extrabold">MEET OUR FOUNDERS</h6>
                    <div className="flex flex-col lg:flex-row relative lg:space-x-12">
                        <div className="relative border-4 border-brand-light flex-1 rounded-lg shadow-2xl overflow-hidden">
                                <img src={HeadOfSchool} className="h-full object-cover" alt="founders" />
                                <div className="shadow-xl absolute w-80% lg:w-[80%]  inset-x-8 bottom-0 md:bottom-0 lg:bottom-0 p-2 lg:p-4 rounded-lg bg-accentDark text-brand-light flex items-center justify-center ">
                                    <h5>Dr Equi & Karen Nwulu</h5>
                                </div>
                        </div>
                        
                        <div className="pt-12 flex-1 flex-col space-y-4 lg:pt-0">
                            <div className="flex items-center justify-left pt-4 space-x-2">
                               <h1 className="text-md  text-brand-light font-semibold">We welcome you to ACA with</h1> 
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e7000b" className="size-6">
                                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>
                            </div>
                            <p className="leading-relaxed text-brand-light text-md">
                                At American Christian Academy, our dedicated teachers continually grow in their profession, embracing evidence-based teaching practices that inspire outstanding academic achievement while nurturing each student's intellectual, physical, social, and spiritual development. Supported by a stable and committed faculty, strong partnerships with the business community, and a caring environment affectionately known by many alumni as their "second home," we prepare students with the knowledge, character, and 21st-century skills needed to excel in an ever-changing world.
                            </p>
                            <p className="leading-relaxed text-brand-light text-md">
                                As generations of families continue to place their trust in ACA—including the children of our pioneering alumni—we celebrate a legacy of excellence, faith, and lifelong relationships that spans decades. We remain steadfast in our commitment to helping every child discover and develop their God-given potential, ensuring that every student becomes a cherished part of the ACA family while looking to the future with confidence, hope, and unwavering trust in our Lord Jesus Christ.
                            </p>
                        </div>

                    </div>
                </div>
                
                <div className="px-8 pt-4  lg:pt-32 pb-300 md:pb-50 lg:pb-50 bg-white">
                    <h6 className="pb-4 text-accentDark text-sm tracking-wide font-extrabold">MEET OUR GOVERNING BOARD</h6>
                    <div className="grid grid-cols-1 min-[600px]:grid-cols-2   md:grid-cols-2 lg:grid-cols-6 auto-rows-fr  gap-16">
                         <div className=" md:col-span-1 lg:col-span-2  relative shadow-2xl  border-primary flex-1 rounded-lg shadow-2xl overflow-hidden">
                             <div className="shadow-xl absolute  bottom-0   inset-0  p-4 bg-primary text-brand-light flex items-center justify-center ">
                                <h5 className="pl-4 font-archivo min-[600px]:text-xl text-3xl md:text-4xl lg:text-3xl lg:leading-10">A Great Team Of Leaders Dedicated To Governance And Committed to Excellence</h5>
                            </div>
                        </div>
                        <div className="md:col-span-1 lg:col-span-2  relative shadow-2xl  border-primary flex-1 rounded-lg shadow-2xl overflow-hidden">
                            <img src={HeadOfSchool} className="h-full object-cover" alt="founders" />
                            <div className="shadow-xl absolute  bottom-0   inset-x-0  p-4 bg-primary text-brand-light flex items-center justify-center ">
                                <h5>Dr Equi & Karen Nwulu [Head Of School & Principal]</h5>
                            </div>
                        </div>
                        <div className="md:col-span-1 lg:col-span-2 relative  border-primary flex-1 rounded-lg shadow-2xl overflow-hidden">
                            <img src={boardMember1} className="h-full object-cover" alt="founders" />
                            <div className="shadow-xl absolute  bottom-0   inset-x-0  p-4 bg-primary text-brand-light flex items-center justify-center ">
                                <h5>Dr Bankole Shodipo</h5>
                            </div>
                        </div>
                        <div className="md:col-span-1 lg:col-span-2 relative  border-primary flex-1 rounded-lg shadow-2xl overflow-hidden">
                            <img src={boardMember2} className="h-full object-cover" alt="founders" />
                            <div className="shadow-xl absolute  bottom-0   inset-x-0  p-4 bg-primary text-brand-light flex items-center justify-center ">
                                <h5>Mr. Lucky James </h5>
                            </div>
                        </div>
                         <div className="md:col-span-1 lg:col-span-2 relative  border-primary flex-1 rounded-lg shadow-2xl overflow-hidden">
                            <img src={boardMember3} className="h-full object-cover" alt="founders" />
                            <div className="shadow-xl absolute  bottom-0   inset-x-0  p-4 bg-primary text-brand-light flex items-center justify-center ">
                                <h5>Dr. Christian Happi</h5>
                            </div>
                        </div>
                         <div className="md:col-span-1 lg:col-span-2 relative  border-primary flex-1 rounded-lg shadow-2xl overflow-hidden">
                            <img src={boardMember4} className="h-full object-cover" alt="founders" />
                            <div className="shadow-xl absolute  bottom-0   inset-x-0  p-4 bg-primary text-brand-light flex items-center justify-center ">
                                <h5>Janice Okpanachi</h5>
                            </div>
                        </div>
                      

                    </div>
                </div>
            </div>
        </>
    )
}


export default AboutComponent