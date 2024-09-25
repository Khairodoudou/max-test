import premImage from './images/prem.jpg';
import spainleague from './images/spainleague.jpg';
import germanieleague from './images/germanieleague.jpg';
import champion from './images/champion.jpg';
import u23 from './images/u23.jpg';



export default function Section2() {
    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
                    <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-white">
                    كن جزءا منا   <span className='text-red-500'>   و غير حياتك</span>   


                    </h2>

                    <br/>

                    <a 
                href="https://t.me/+yV92M2Bp6tc1Y2M8" 
                className="flex items-center justify-center bg-gradient-to-b from-teal-400 to-blue-400 text-white font-medium text-lg py-2 px-4 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl active:scale-95"
                id="button"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20 mr-2 transition-all hover:bg-opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="fill-current text-white transition-transform hover:rotate-45">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                  </svg>
                </div>
                <span> إنضم إلينا على التيليجرام</span>
                    </a>
                </div>

                <div  className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
                    
                    <div className="rounded">
                        <img className="rounded-xl md:h-44 md:w-full mx-auto" src={premImage} alt="prem" />
                    </div>
                    
                    <div className="rounded">
                        <img className="rounded-xl md:h-44 md:w-full mx-auto" src={spainleague} alt="spainleague" />
                    </div>

                    <div className="rounded">
                        <img className="rounded-xl md:h-44 md:w-full mx-auto" src={germanieleague} alt="germanieleague" />
                    </div>

                    <div className="rounded">
                        <img className="rounded-xl md:h-44 md:w-full mx-auto" src={champion} alt="champion" />
                    </div>

                    <div className="rounded hidden md:block">
                        <img className="rounded-xl md:h-44 md:w-full mx-auto" src={u23} alt="u23" />
                    </div>


                 

                    


                </div>
            </div>
        </div>
    );
}
