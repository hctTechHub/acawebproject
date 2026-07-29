import {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'

const SeniorWalkComponent = () => {
      const {ref,inView,entry} = useInView({
        threshold:0
      })
      useEffect(() => {
            const outPut = inView ? 'inView' : 'outOfView'
            console.log(outPut)
      },[inView])

    return(
        <div  className="px-8 py-12 sm:py-22 lg:py-45 bg-gradient-to-b from-white to-amber-50">
                <h6 className="pb-4 text-amber-900 text-sm tracking-wide font-extrabold opacity-80">From Classrooms to New Horizons</h6>
                <div className="sm:w-full lg:w-1/2">
                  <p className="text-amber-950 text-4xl font-semibold">Every Step Tells a Story. Every Memory Lasts Forever.</p>
                </div>
                  <div className="relative py-16">
                      <div className="flex flex-col">
                        <div ref={ref} className="relative rounded-lg overflow-hidden isolate sm:w-full lg:w-3/5 lg:mx-auto h-80  bg-amber-950 ">
                            <iframe className="w-full h-full" src={ inView ? "https://www.youtube.com/embed/pwnkwXh900o?autoplay=1" : "https://www.youtube.com/embed/pwnkwXh900o"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe>
                            <div className="sm:hidden absolute left-0 bottom-0  w-[63%] h-[100px] rounded-tr-lg  bg-amber-50">
                            </div>
                        </div>
                        
                        <div className="p-4 absolute bottom-0  sm:border-4 sm:border-white sm:w-full lg:w-1/2 lg:translate-x-21 -translate-y-7 rounded-xl shadow-xl bg-amber-900 backdrop-blur-md text-amber-50">
                          <h5 className="font-mono">
                            At American Christian Academy’s annual event, our seniors take one final walk around campus, celebrating unforgettable memories, lasting friendships, and the beginning of a new chapter.
                          </h5> 
                        </div> 
                      </div>
                  </div>
                </div>

    )
}

export default SeniorWalkComponent