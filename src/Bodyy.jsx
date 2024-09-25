import bg from './images/bg.jpg';


export default function Bodyy() {
    return (
        <div className="">
            <section className="relative  px-12 overflow-hidden bg-black py-16 lg:py-36">
                <div className="absolute inset-0">
                    <img 
                        className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" 
                        src={bg} 
                        alt="bg" 
                    />
                </div>

                <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>
                <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
                        <p className="mt-4 md:text-end text-center text-base text-gray-200">
                        مجالنا يسمى بالإستثمار الرياضي او الصفقات الرياضية والربح من الألعاب مجال سهل ولا يتطلب مهارة او خبرة حيث انك ستنظم لأفضل القنوات فالعالم العربي بشهادة العديد من المتابعين والإخوان السابقين
                        </p>

                        
                    </div>
                </div>
            </section>
        </div>
    );
}
