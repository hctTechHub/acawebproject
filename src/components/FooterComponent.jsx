import acaLogo from "../assets/images/acaLogo.png"
const FooterComponent = () => {
    
    return(
        
                    <div className="px-8 pt-16  absolute bottom-0 flex flex-col w-full  bg-amber-950 text-amber-50"> 
                        <div className="flex sm:flex-col sm:space-y-4 lg:flex-row lg:space-x-8">
                          <div className="pb-16 flex sm:space-x-32 lg:space-x-8 justify-between">
                            <div className="sm:flex-1 lg:flex-2 flex flex-col">
                                <img className="w-30 h-30" src={acaLogo} alt="acaLogo"/>
                                <p>American Christian Academy (ACA) is an internationally accredited Christian school currently serving creche through twelfth grade students.</p>
                            </div>
                            <div className="flex-1 flex flex-col">
                                <h5 className="pb-4 text-lg font-semibold text-amber-50">Site Map</h5>
                                <a href="#">Home</a>
                                <a href="#">About</a>
                                <a href="#">Academics</a>
                                <a href="#">Boarding</a>
                                <a href="#">Admissions</a>
                                <a href="#">Gallery</a>
                                <a href="#">News & Update</a>
                            </div>
                        </div>
                        <div className="flex sm:pb-8 sm:space-x-32 lg:space-x-8 lg:justify-between">
                            <div className="flex-2">
                                <h5 className="pb-4 text-lg font-semibold">Non-Discriminatory Policy</h5>
                                <p>American Christian Academy prohibits discrimination against any student in the process of admittance on the basis of race, religion, color, sex, age, national origin or ancestry, genetic information, or parental status. Students are eligible for admission if it is believed that the school is able to meet their particular needs.</p>
                            </div>
                            <div class="flex-2 flex flex-col">
                                <h5 className="pb-4 text-lg font-semibold">Subscribe For Our News Letter</h5>
                                <div className="flex flex-col space-y-2">
                                    <label>
                                        <input className="p-2 bg-amber-800 w-full rounded-lg" placeholder="Email"/>
                                    </label>
                                    <button className="p-2 bg-amber-50 text-amber-950 rounded-lg">Subscribe</button>
                                </div>
                            </div>

                        </div>
                     </div>
                        <div className="border-t-1 border-amber-50"></div>
                        <div className="flex justify-between py-8">
                            <h6 className="text-sm">&copy; 2026 American Christian Academy. All rights reserved.</h6>
                            <h6 className="text-sm">Designed By <span><strong>HCT HUB</strong></span></h6>
                        </div>
                         <div className="fixed flex items-center justify-center bottom-2 right-2 w-40 h-40 rounded-full bg-transparent">
                            <div className="relative flex items-center justify-center bg-transparent w-30 h-30 rounded-full">
                            <div className="w-15 h-15 bg-green-200 rounded-full animate-ping"></div>
                            <div className="absolute  w-15 h-15 rounded-full bg-green-500"></div> 
                            <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false" class="w-6 h-6 sm:w-7 sm:h-7 absolute text-white"><path d="M16 3C9.383 3 4 8.383 4 15c0 2.559.805 4.93 2.176 6.88L5 29l7.33-1.98A11.94 11.94 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 21.6c-1.941 0-3.75-.555-5.285-1.516l-.38-.238-4.35 1.176 1.163-4.242-.25-.41A9.55 9.55 0 0 1 6.4 15C6.4 9.706 10.706 5.4 16 5.4S25.6 9.706 25.6 15 21.294 24.6 16 24.6z"></path><path d="M21.2 18.7c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.9.9-.2.2-.3.2-.5.1-.2-.1-1-.4-1.8-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.3.2-.4.1-.1 0-.3 0-.4 0-.1-.6-1.5-.8-2.1-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.9 2.3 1 2.5c.1.2 1.8 2.8 4.4 4 .6.3 1.1.5 1.5.6.6.2 1.1.2 1.5.1.5-.1 1.2-.5 1.3-1 .2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3z"></path></svg>
                            </div>
                        </div>
                    </div>
                    
           
                   
    )
}
export default FooterComponent