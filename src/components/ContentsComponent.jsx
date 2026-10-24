import {useState,useEffect} from "react"
import Community1Image from "../assets/images/acaCommunity1.jpg"
import Community2Image from "../assets/images/acaCommunity2.jpg"
import Community3Image from "../assets/images/acaCommunity3.jpg"
import Community4Image from "../assets/images/acaCommunity4.jpg"
import Community5Image from "../assets/images/acaCommunity5.jpg"
import Community6Image from "../assets/images/acaCommunity6.jpg"
import Community7Image from "../assets/images/acaCommunity7.jpg"
import Community8Image from "../assets/images/acaCommunity8.jpg"
import Community9Image from "../assets/images/acaCommunity9.jpg"
import Community10Image from "../assets/images/acaCommunity10.jpg"
import GraduationCap from "../assets/images/GraduationCap.png"
import event1 from "../assets/images/event-1.jpg"
import event2 from "../assets/images/event-2.jpg"
import SeniorWalkComponent from "./SeniorWalkComponent"
import DOMPurify from "dompurify"

const ContentsComponent = ({articles}) => {
  const filterArticles = articles.slice(0,2)
  const baseURL = import.meta.env.VITE_BASE_FILE_URL
  const [active,setActive] = useState(0)
  const [accordionState,setAccordionState] = useState(0)
  const stepArray = ["step 1","step 2","step 3"]
  useEffect(() => {
         const timeOut = setInterval(() => {
              setActive((prev) => {
                    if(prev <= stepArray.length-1){
                      return prev + 1 //next
                    }
                    else{
                      
                          return 1  //start again
                    }
              })
        
        },5000)
      return () => clearInterval(timeOut)
  },[])

  useEffect(() => {
    console.log(articles)
  }, [articles]);

const handleClick = (num) => {
  
    return () => setAccordionState(num)
    //console.log(num)
   
}
    return(

        <>
            <div className="space-y-8 sm:space-y-16 lg:space-y-32  bg-white bg-gradient-to-b from-white to-white px-12 pt-10 pb-10  sm:pb-20  lg:py-36">
                          <div className="flex space-y-4 sm:space-y-8 lg:space-y-0 flex-col sm:flex-col lg:flex-row lg:tems-center">
                              <div className="flex-1">
                                      <h6 className="pb-4 text-accentDark text-sm tracking-wide font-extrabold">WHY AMERICAN CHRISTIAN ACADEMY [ACA]</h6>
                                      <p className="text-4xl sm:text-4xl lg:text-6xl font-semibold text-primary">Building Future Leaders Through Excellence</p>
                              </div>
                              <div className="flex-1 leading-relaxed">
                                  <p className="text-secondaryDark text-md lg:text-lg">
                                      American Christian Academy is dedicated to providing an excellent, student-centered education.
                                      The school fosters academic achievement, personal growth, and strong Christian values.
                                      Dedicated educators and supportive families work together to help every student succeed.
                                      A culture of innovation, accountability, and continuous improvement drives high standards.
                                      Students are equipped with the knowledge, character, and confidence to become future leaders.
            
                                  </p>
                              </div>
                          </div>
            
                          {/**Visit Our School */}
                          <div className="sm:py-4">
                            <h6 className="pb-8 sm:pb-8 lg:pb-8 text-accentDark text-sm tracking-wide font-extrabold">VISIT OUR SCHOOLS</h6>
                              <div className="flex flex-col space-y-8 sm:flex-col   lg:flex-row sm:space-y-4 lg:space-y-0 sm:space-x-0 lg:space-x-2 w-full mx-auto ">
                                <div className="relative flex-1 bg-secondary space-y-4 px-4 py-8 rounded-lg shadow-2xl shadow-secondaryDark">
                                      <h1 className="relative py-2 after:absolute after:h-0.5 after:w-full after:bg-primary after:bottom-0 after:left-0 text-primary font-bold text-lg">Pre-School</h1>
                                      <p className="pb-8 text-primary">American Christian Academy Nursery School provides a safe, nurturing, and Christ-centered environment where young learners develop foundational academic, and social learning experiences.</p>
                                      <a href="#" className="inline-block absolute bottom-4 bg-primary text-brand-light px-2 py-2 rounded">read more <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                      </svg>
                                    </a>
                                </div>
                                <div className="relative flex-1 bg-primary space-y-4 px-4 py-8 rounded-lg shadow-2xl shadow-secondaryDark text-secondary">
                                      <h1 className="py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary text-secondary font-bold text-lg">Elementary School</h1>
                                      <p className="pb-8">American Christian Academy Elementary School builds a strong academic and moral foundation by fostering curiosity, creativity, and character in a supportive, Christ-centered learning environment.</p>
                                      <a href="#" className="inline-block absolute bottom-4 bg-secondary text-amber-950  px-2 py-2 rounded">read more <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block size-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
            
                                      </a>
                                </div> 
                                
                                <div className="relative flex-1 bg-secondary space-y-4 px-4 py-8 rounded-lg shadow-2xl shadow-secondaryDark text-primary">
                                      <h1 className="py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-950 text-primary font-bold text-lg">Middle School</h1>
                                      <p className="pb-8">American Christian Academy Middle School equips students with the knowledge, character, and critical thinking skills needed to excel academically, grow spiritually, and prepare confidently for high school and beyond.</p>
                                      <a href="#" className="inline-block absolute bottom-4 bg-primary text-brand-light px-2 py-2 rounded">read more <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block size-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                      </a>
                                </div> 
                                <div className="relative flex-1 bg-primary space-y-4 px-4 py-8 rounded-lg shadow-2xl shadow-secondaryDark text-secondary">
                                    <h1 className="relative py-2 after:absolute after:h-0.5 after:w-full after:bg-brand-light after:bottom-0 after:left-0 text-secondary font-bold text-lg">High School</h1>
                                      <p className="pb-8">American Christian Academy High School prepares students for college, careers, and lifelong success through rigorous academics, Christian values, leadership development, and opportunities for personal growth</p>
                                      <a href="#" className="inline-block absolute bottom-4 bg-secondary text-amber-950 px-2 py-2 rounded">read more <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                      </svg>
                                    </a>
                                </div>
                              </div>
                          </div>
                    </div> 
                    {/**End Visit Our School */}
                    {/**Our Community */}
                    <div className="px-12  sm:-translate-y-20 bg-gradient-to-b from-white to-white sm:px-12 lg:px-8 py-0">
                          <h6 className="pb-8  text-accentDark text-sm tracking-wide font-extrabold">OUR COMMUNITY</h6>
                          <div className="flex flex-col sm:flex-col lg:flex-row items-center justify-between">
                              <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                  <div className=" lg:col-span-2 rounded-md   lg:aspect-video overflow-hidden shadow-2xl"><img src={Community10Image} alt="image" className="w-full h-full object-cover" /></div>
                                  <div className="overflow-hidden rounded-md shadow-2xl"><img src={Community7Image} className="w-full h-full object-cover" alt="image" /></div>
                                  <div className="overflow-hidden rounded-md shadow-2xl"><img src={Community2Image} alt="image" className="w-full h-full object-cover" /></div>
                                  <div className="lg:col-span-2 lg:aspect-video overflow-hidden rounded-md shadow-2xl"><img src={Community6Image} alt="image" className="w-full h-full  object-center" /></div>
                              </div>
                              <div className="flex-1 pt-8  text-left sm:pt-16  lg:px-16  sm:text-left lg:text-center tracking-wide">
                                <p className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold text-primary ">A Community Committed to Excellence</p>
                                <p className="text-left pt-8 text-accentDark text-md lg:text-lg">American Christian Academy fosters a strong partnership among parents, staff, and the school community, working together to uphold academic excellence and support every student's academic, spiritual, and personal growth.</p>
                              </div>
                            </div>
                            {/**End Our Community */}
            
                            {/**Our Programs Section */}
                            <div className="py-8 sm:py-16 lg:py-32">
                             <h6 className="pb-4 text-accentDark text-sm tracking-wide font-extrabold">OUR PROGRAMMES</h6>
                             <div className="sm:w-full lg:w-1/2 pb-4">
                                <p className="text-4xl sm:text-4xl lg:text-4xl font-semibold text-primary">Standardize Academic Examinations & College Preparations</p>
                             </div>
                             <div className="w-full  text-center px-4 py-4  gap-2 grid sm:grid-cols-1 lg:grid-cols-5  bg-white">
                                <div className="rounded-lg outline-1 outline-secondaryDark bg-secondary px-8 py-16 text-primary">
                                    <div class="flex items-center justify-center px-2 py-2 mb-2  space-x-2 rounded-lg outline-1 outline-secondaryDark bg-white">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                    </svg>
                                      <h1 className="font-bold text-xl">AP EXAMS</h1></div>
                                      <p className="text-amber-950">American Christian Academy excels in AP exams by providing rigorous college-level instruction that prepares students for future academic success.</p>
                                </div>
                                <div className="rounded-lg bg-primary px-8 py-16 text-primary">
                                    <div class="flex items-center justify-center px-2 py-2 mb-2  space-x-2 rounded-lg bg-white">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                    </svg>
                                      <h1 className="font-bold text-xl">IGCSE</h1></div>
                                  <p className="text-secondary">American Christian Academy's IGCSE program equips students with a strong academic foundation through a rigorous, internationally recognized curriculum.</p>
                                </div>
                                <div className="rounded-lg bg-secondary outline-1 outline-secondaryDark px-8 py-16 text-primary">
                                    <div class="flex items-center justify-center px-2 py-2 mb-2  space-x-2 rounded-lg outline-1 outline-secondaryDark bg-white">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                    </svg>
                                      <h1 className="font-bold text-xl">PSAT</h1></div>
                                    <p className="text-amber-950">American Christian Academy prepares students for the PSAT by strengthening the core skills assessed on the exam—Reading, Writing and Language, and Math.</p>
                                </div>
                                <div className="rounded-lg bg-primary px-8 py-16 text-primary">
                                    <div class="flex items-center justify-center px-2 py-2 mb-2  space-x-2 rounded-lg bg-white">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                    </svg>
                                      <h1 className="font-bold text-xl">SAT</h1></div>
                                  <p className="text-secondary">American Christian Academy prepares students for success on the SAT by developing the core skills assessed in Reading and Writing and Math</p></div>
                                <div className="rounded-lg bg-secondary outline-1 outline-secondaryDark px-8 py-16 text-primary">
                                    <div class="flex items-center justify-center px-2 py-2 mb-2  space-x-2 rounded-lg bg-white">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                    </svg>
                                      <h1 className="font-bold text-xl">CAMBRIDGE <br/> A-LEVELS</h1></div>
                                   <p className="text-amber-950">American Christian Academy's Cambridge A Level program develops advanced subject knowledge, critical thinking, and independent learning.</p></div>
                             </div>
                          </div>
                          {/**End Our Programmes Section */}
                        </div>
                {/**Ready to join ACA Section */}
               <div className="px-8 py-4 bg-gradient-to-b bg-gray-50">
                 <h6 className="pb-4 text-sm tracking-wide font-extrabold text-accentDark">READY TO JOIN ACA</h6>
                 <div className="w-full lg:w-1/2 pb-4">
                    <p className="text-4xl font-semibold text-primary">Begin Your Journey at American Christian Academy</p>
                 </div>
                 <div className="flex flex-col  space-y-10 sm:flex-col sm:space-y-10 lg:space-y-0 lg:flex-row sm:space-x-0 lg:space-x-16">
                    <div className="flex-1">
                      <div className="flex relative  items-center justify-center h-full py-8">
                          <div className="absolute bottom-0 sm:bottom-0 sm:left-0 flex items-center justify-center border-4 border-white w-[80%] h-[30%] lg:top-80 lg:right-0 rounded-lg bg-gray-100/80 backdrop-blur-md lg:mb-200">
                              <a href="#" className="inline-block px-4 py-4 bg-primary text-secondary rounded-lg" >Click To Start Application <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                  </svg>
                                  </a>
                          </div>
                            <img className="w-[70%] object-cover  h-full rounded-lg shadow-xl" src={GraduationCap} alt="graduation-cap" />
                        </div>
                    </div>
                      <div className="flex-1">
                         <p className="pb-8 text-secondaryDark text-md lg:text-lg">Begin your journey at American Christian Academy, where academic excellence, strong character development, and a supportive community help prepare you for lifelong success.</p>
                        <div className="flex space-x-8 flex-1">
                            <div className="relative">
                              <div className="absolute w-0.5 h-full bg-primary top-0 left-0"></div>
                            </div>
                            <div className="flex flex-col space-x-10 space-y-4 sm:w-full"> 
                                <div className="relative  px-4 py-4 bg-gray-100/80 border border-primary rounded-lg shadow-lg backdrop-blur-md flex  w-full">
                                  <div className="">
                                      <h3 className="text-lg font-bold text-primary">Admission Procedure Brochure</h3>
                                      <p className="text-secondaryDark">To apply for ACA admission, first read the <a href="#">Admission Procedure Brochure</a>.</p>
                                  </div>
                                  <div className={`absolute flex items-center justify-center transform -translate-x-18 w-12 h-12 rounded-full py-2 bg-secondary border-4 text-center ${active === 1 ? 'border-primary shadow-xl bg-amber-100': 'border-gray-400'}`}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="relative px-4 py-4 rounded-lg bg-gray-100/80 shadow-lg flex  border border-primary w-full">
                                  <div className="">
                                      <h3 className="text-lg font-bold text-primary">Application Fee</h3>
                                      <p className="text-secondaryDark">All applicants must pay an application fee of N30,000 </p>
                                  </div>
                                      <div className={`absolute flex items-center justify-center transform -translate-x-18 w-12 h-12 rounded-full  py-2 bg-secondary border-4 text-center ${active === 2 ? ' border-primary shadow-xl bg-amber-100': 'border-gray-400'}`}>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                          </svg>
                                      </div>
                                </div>
                                <div className="relative flex  px-4 py-4 rounded-lg bg-gray-100/80 backdrop-blur-md border border-primary w-full">
                                  <div className="">
                                      <h3 className="text-lg font-bold text-primary">Application Form</h3>
                                      <p className="text-secondaryDark">Fill out the application form once payment is complete.</p>
                                  </div>
                                  <div className={`absolute flex items-center justify-center transform -translate-x-18 w-12 h-12 rounded-full py-2 bg-secondary border-4  ${active === 3 ? 'border-primary shadow-xl bg-amber-100' : 'border-gray-400'}`}>
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                  </div>
                                </div>
                                
                              </div>
                        </div>
                      </div> 
                  </div>              
              </div>
              {/**End ready to Join ACA Section */}

              {/**Senior Walk Section */}

              <SeniorWalkComponent />
              {/**End Senior Walk Section */}

              {/**FAQs */}

              <div className="px-8 sm:px-8 py-0 flex flex-col items-center  bg-white">
                <h6 className="pb-4 tracking-widest text-secondaryDark text-sm  font-extrabold opacity-80">FAQs</h6>
                <h1 className="pb-8 text-primary font-semibold text-4xl text-center sm:text-4xl lg:text-6xl">Frequently Asked Questions</h1>
                <div className="sm:w-full lg:w-1/2 text-center mx-auto">
                  <p className="pb-8 md:pb-16 lg:pb-16 text-md lg:text-lg text-secondaryDark">Find answers to some of the most frequently asked questions about American Christian Academy, including admissions, academics, boarding, tuition, and student life.
                  </p>
                </div>
                <div className="sm:w-[95%] lg:w-[58%] h-0.5 bg-gray-100"></div> 
                <div  className="flex flex-col sm:w-full lg:w-[60%] lg:mx-auto  font-semibold  text-primary  px-2 py-4">
                 <div className="flex items-center justify-between">
                    <p className="px-2 text-primary">What classes do students offer at America Christian Academy(ACA)?</p>
                  {
                    accordionState !== 1
                    ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-4" onClick = {handleClick(1)}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="text-amber-950 size-5" onClick = { handleClick(0)}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  }

                  </div>
                  <div className= {accordionState === 1 ? "font-normal":"font-normal  transition-all transition-discrete duration-200 hidden"} >
                    <p className="px-2 text-secondaryDark">American Christian Academy equips students for global university success through internationally recognized programmes, including SAT, PSAT, IGCSE, Advanced Placement (AP), and Cambridge A-Levels, providing rigorous academic preparation and multiple pathways to leading universities worldwide.</p>
                  </div>
                </div>
                <div className="sm:w-[95%] lg:w-[58%] h-0.5 bg-gray-100"></div> 
                <div className="flex flex-col sm:w-full lg:w-[60%] mx-auto  font-semibold  text-primary px-2 py-4">
                  <div className="flex items-center justify-between">
                    <p className="px-2 text-primary">Does American Christian Academy (ACA) have boarding facilities?</p>
                      {
                        accordionState !== 2
                        ?
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-4" onClick = {handleClick(2)}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="text-amber-950 size-5" onClick = { handleClick(0)}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      }

                  </div>
                  <div className= {accordionState === 2 ? "font-normal":"font-normal  transition-all transition-discrete duration-200 hidden"} >
                    <p className="px-2 text-secondaryDark">
                      American Christian Academy provides a safe and nurturing boarding experience through our Wellspring Hostel, offering students a true home away from home in a secure, family-centered environment. With comfortable accommodation, nutritious meals, supervised study sessions, healthcare support, and enriching extracurricular and weekend activities, Wellspring Hostel helps students thrive both academically and socially.
                    </p>
                  </div>
                </div>
                <div className="sm:w-[95%] lg:w-[58%] h-0.5 bg-gray-100"></div> 
                <div className="flex flex-col sm:w-full lg:w-[60%] mx-auto font-semibold  text-primary px-2 py-4">
                  <div className="flex items-center justify-between">
                    <p className="px-2">What is the cost of tuition at American Christian Academy (ACA)?</p>
                      {
                        accordionState !== 3
                        ?
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-4" onClick = {handleClick(3)}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="text-amber-950 size-5" onClick = { handleClick(0)}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      }

                  </div>
                  <div className= {accordionState === 3 ? "font-normal":"font-normal  transition-all transition-discrete duration-200 hidden"} >
                    <p className="px-2 text-secondaryDark">
                      American Christian Academy's tuition is competitively priced to reflect its modern facilities, advanced technology, and high standard of education. For detailed tuition information, prospective families are encouraged to contact the Admissions Office through the <a href="#">Contact Us</a> section of the website.
                    </p>
                  </div>
                </div>
                <div className="sm:w-[95%] lg:w-[58%] h-0.5 bg-gray-100"></div> 
                <div className="flex flex-col sm:w-full lg:w-[60%] mx-auto  font-semibold  text-primary px-2 py-4">
                  <div className="flex items-center justify-between">
                    <p className="px-2">Does American Christian Academy (ACA) accept transfer students from other schools?</p>
                      {
                        accordionState !== 4
                        ?
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-4" onClick = {handleClick(4)}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="text-amber-950 size-5" onClick = { handleClick(0)}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      }

                  </div>
                  <div className= {accordionState === 4 ? "font-normal":"font-normal  transition-all transition-discrete duration-200 hidden"} >
                    <p className="px-2 text-secondaryDark">
                      Yes. American Christian Academy welcomes transfer students into eligible grade levels. Our Admissions Office carefully reviews each application, including academic records and placement requirements, to ensure a smooth transition and the best learning experience for every student.
                    </p>
                  </div>
                </div>
                <div className="sm:w-[95%] lg:w-[58%] h-0.5 bg-gray-100"></div> 
              </div>

              {/**End FAQs */} 


              {/**Events & Blogs */}
              <div className="pb-50 gap-4 sm:pb-50 lg:pb-50 flex flex-col  sm:flex-col lg:flex-row sm:space-y-24 lg:space-x-20 px-8 pt-16 sm:pt-32 md:pt-32 lg:pt-32">
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <h6 className="text-sm text-accentDark font-extrabold tracking-wide">Our Events In Video</h6>
                    <a href="" className="text-xs sm:text-sm md:text-md lg:text-md text-secondary bg-primary inline-block p-2 rounded-lg shadow">View All Events</a>
                  </div>
                  <div className="space-y-8 mt-8">
                      <div className="group mx-auto sm:w-[70%] lg:w-full h-[300px]">
                          <div className=" overflow-hidden h-full rounded-lg">
                              <iframe className="w-full h-full" src="https://www.youtube.com/embed/pwnkwXh900o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe>
                          </div>
                      </div>
                      <div className="group mx-auto sm:w-[70%] lg:w-full h-[300px]">
                          <div className=" overflow-hidden h-full rounded-lg">
                              <iframe className="w-full h-full" src="https://www.youtube.com/embed/pwnkwXh900o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe>
                          </div>
                      </div>
                     
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                      <div className="flex justify-between">
                          <h6 className="text-sm tracking-wide text-accentDark font-extrabold">Our Blog Posts</h6>
                          <a href="" className="text-xs sm:text-sm md:text-md lg:text-md text-secondary bg-primary inline-block px-2 py-2 rounded-lg shadow">View All Blogs</a>
                      </div>
                      <div className="space-y-8 mt-8">
                          
                            {
                                filterArticles.map((article,index) => {
                                    const sanitizedContent = DOMPurify.sanitize(article.content)
                                    const articleLength = new DOMParser()
                                      .parseFromString(sanitizedContent,"text/html")
                                      .body.textContent.length
                                    const articleSubStr = sanitizedContent.slice(0,200)
                                    return <div key={index}>
                                                <div  className="mx-auto sm:w-[70%]  lg:w-full h-[300px] flex flex-col rounded-lg shadow-lg ">
                                                  <div className="flex-1 overflow-hidden  rounded-lg">
                                                      <img src={`${baseURL}/uploads/${article.bannerImg}`} alt="img"  className="w-full h-full object-cover"/>
                                                  </div>
                                                   <div className="flex-1 overflow-hidden flex-col px-4 pt-4">
                                                    <h5 className="text-xl text-primary font-semibold">{article.title}</h5>
                                                   
                                                    <div className="flex justify-between">
                                                        <div className="px-3 py-2 mt-2 bg-primary w-fit text-secondary rounded-md">Read</div>
                                                    </div>
                                                  </div>
                          </div>
                                      
                                      
                                      </div>
                                })
                            }
                          
                        </div>
                  </div>
                    
              </div>

              {/**End Events & Blogs */}
            
        </>
    )
}

export default  ContentsComponent