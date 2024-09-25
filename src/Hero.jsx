import hero from './images/hero.avif';


export default function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-12 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={hero} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 p-3 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-center md:text-end sm:text-4xl text-3xl mb-4  font-medium text-white">
          السلام عليكم أخي وأختي المحترمة
              <br className="hidden lg:inline-block" /> <p className='md:text-end pt-2'>ومرحبا بكم</p>

            </h1>
            <p className="md:text-end p-2 text-center text-white md:mb-10 leading-relaxed">
            في مستقبلك الجديد حيث هنا سوف تعدد مداخيلك المادية معنا و الأهم سوف يصبح دخلك بالعملة الأجنبيةالدولار

                
            <div className="text-center flex flex-center justify-center items-center pt-5 md:pt-10 ">
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
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
