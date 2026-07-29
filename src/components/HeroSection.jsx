import HeroBrushImage from "../assets/images/HeroBrushImage.png"
import GirlWithBag from "../assets/images/girlWithBag.png"
import HeroImage from "../assets/images/HeroImage.png"


const HeroSection = () => {

return(
    <>
        <div className="relative bg-amber-100 px-2">
          <div className="flex flex-col sm:flex-col lg:flex-row lg:justify-between">
              <div className="relative order-2 pt-75 md:pt-60 pb-5 sm:order-2 lg:order-1 sm:w-150 lg:w-100 px-12 sm:pt-64 sm:pb-5 lg:py-8">
                  <img src={HeroBrushImage} alt="brush-stroke" className="absolute sm:top-50 lg:top-20 h-80  left-2"/>
                  <h5 className="text-amber-700 font-bold text-lg">American Christian Academy</h5>
                  <h1 className="relative text-amber-950 lg:text-6xl text-5xl sm:text-7xl font-extrabold tracking-wide">Pursuing excellence <span className="text-amber-900">across</span> every endeavor.</h1>
              </div>
              <div className="relative order-1 items-center flex-col sm:order-1 lg:order-2 flex sm:items-center  sm:flex-col  sm:pl-16 lg:pr-16 lg:py-8">
                {/**circle */}
                  <div className="flex relative sm:ml-14 translate-y-30 sm:translate-y-15 lg:mr-0 lg:translate-y-15 h-80 w-80 rounded-full bg-amber-300"></div>
                      <img className="absolute top-36 sm:top-8 sm:center lg:top-18 lg:right-0 transfrom  sm:scale-x-95 sm:scale-y-120 lg:scale-x-100 lg:scale-y-100" src={HeroImage} alt='group-of-students' />
              </div>  
          </div>
          <svg className="absolute hidden sm:block sm:top-123 sm:left-103 lg:top-85 lg:left-24 transform  sm:rotate-85 lg:-rotate-20"
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            >
            <path
                d="M20 20
                C20 70, 90 40, 90 90
                C90 130, 140 130, 150 150"
                stroke="#78350f"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
            />
            <path
                d="M136 146 L150 150 L146 136"
                stroke="#78350f"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
            />
            </svg>
          <div className="absolute top-128 inset-x-10 md:left-12 md:top-115 sm:left-12 lg:right-40 sm:top-115 lg:top-105 flex items-center justify-center space-x-8 shadow-2xl transform py-4 w-[85%] sm:w-[85%] lg:w-[65%]  rounded-lg bg-gray-100/80 backdrop-blur-md">
              <div className="flex items-center space-x-2">
                <div className="bg-amber-100 rounded px-2 py-2">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                </div>
                <div className="text-sm sm:text-2xl lg:text-2xl font-bold text-amber-950">Truth</div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="bg-amber-100 rounded px-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>

                </div>
                <div className="text-sm sm:text-2xl lg:text-2xl font-bold text-amber-950">Knowledge</div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="bg-amber-100 rounded px-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 opacity-60">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                </div>
                <div className="text-sm sm:text-2xl lg:text-2xl font-bold text-amber-950">Wisdom</div>
              </div>
          </div>
      </div>

    </>
  )
}


export default HeroSection