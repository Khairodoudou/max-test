import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import tem from './images/tem.mp4';



export default function Galerie() {
    return (
      <section >
        <div className='bg-white rounded-xl p-3'>
        <div className="max-w-2xl mx-auto p-5 text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">عينة من سحوبات أرباح المتابعين  </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-5">
            <img className="w-full h-96 rounded-3xl object-cover" src={p1} alt="p1" />
            <img className="w-full h-96 rounded-3xl object-cover" src={p2} alt="p2" />
            <img className="w-full hidden md:block h-96 rounded-3xl  object-cover" src={p3} alt="p3" />
        </div>
        </div>
        
        



      </section>
    );
}
