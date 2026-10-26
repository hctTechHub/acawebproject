import HeroBrushImage from "../assets/images/HeroBrushImage.png"
import GirlWithBag from "../assets/images/girlWithBag.png"
import HeroImage2 from "../assets/images/HeroImage2.png"


const HeroSection = () => {

return(
    <>
        <div className="relative min-h-screen flex justify-center  bg-white px-2">
          <div className="flex flex-col w-full sm:flex-col md:flex-col lg:flex-col">
              <div className="relative  pt-28 flex-1 w-full h-full min-[1032px]:pt-0  md:pt-24 px-12 sm:pt-24 sm:pb-5 lg:pt-8">
                  <div className="flex w-full  h-full flex-col justify-center  sm:justify-center  md:justify lg:justify-center">
                        {/*<img src={HeroBrushImage} alt="brush-stroke" className="absolute min-[375px]:top-30 top-40 sm:top-45 md:top-70 lg:top-35 h-80  left-2"/>*/}
                        <h5 className="text-accentDark font-bold  sm:text-md md:text-lg lg:text-lg">American Christian Academy</h5>
                        <h1 className="relative text-primary lg:text-8xl  text-5xl  md:text-8xl sm:text-7xl font-extrabold tracking-wide">Pursuing excellence <span className="text-accentDark">across</span> every endeavor.</h1>
                  </div>
             </div>
              <div className="relative  flex-1   items-center flex flex-col   sm:items-center  sm:flex-col  sm:pl-16 lg:pr-16 lg:py-8">
                {/**circle */}
                 
                 <img className="w-full h-full lg:overflow-hidden lg:w-[80%] object-center lg:object-cover" src={HeroImage2} alt='group-of-students' />
                 <div className="absolute bottom-0 left-0 flex items-center justify-center  space-x-8 shadow-2xl sm:shadow-xl md:shadow-xl py-4 w-full    rounded-lg bg-primary backdrop-blur-md">
              <div className="flex items-center  space-x-2 sm:space-x-2 md:space-x-2 lg:space-x-2">
                <div className="bg-secondary rounded px-2 py-2">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 sm:size-4 md:size-4 lg:size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                </div>
                <div className="text-xs sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">Truth</div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="bg-secondary rounded px-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 sm:size-4 md:size-4 lg:size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>

                </div>
                <div className="text-xs sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">Knowledge</div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="bg-secondary rounded px-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 sm:size-4 md:size-4 lg:size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                </div>
                <div className="text-xs sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">Wisdom</div>
              </div>
          </div>
              
              </div>  
          </div>
         {/* <svg className="absolute hidden  lg:block  top-110 left-18 transform  sm:rotate-85 lg:rotate-7"
            width="180"
            height="240"
            viewBox="0 0 180 180"
            fill="none"
            >
            <path
                d="M20 20
                C20 70, 90 40, 90 90
                C90 130, 140 130, 150 150"
                stroke="#3E1B12"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
            />
            <path
                d="M136 146 L150 150 L146 136"
                stroke="#3E1B12"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
            />
            </svg>*/}
        
      </div>

    </>
  )
}


export default HeroSection