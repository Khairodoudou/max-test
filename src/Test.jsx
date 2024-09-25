import ananas from './images/ananas.png';


export default function Test() {
    return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-12 py-10 md:flex-row flex-col items-center">
         
          <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font font-serif sm:text-5xl text-3xl mb-4 font-bold text-white">
            Revitalize Your Routine, 
            
              <br className="hidden lg:inline-block" /> Fresh, Fruity, Fantastic!
            </h1>
            <p className="mb-8 leading-relaxed">
            " Savor the Symphony of Flavors, with Nature's Sweetness & deliciousness.
           <br/> Get the best variety of juices here! ”
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-700  rounded text-lg">
              View Menu
              </button>
              <button className="ml-4 inline-flex text-gray-800 bg-transparent border-neutral-200 border-2 py-2 px-6 focus:outline-none rounded text-lg">
              Discount
              </button>
            </div>
          </div>

          <div className="lg:max-w-lg  md:w-1/3 w-5/6">
            <img className="object-cover object-center rounded" alt="ananas.png" src={ananas} />
          </div>

        </div>
      </section>
    );
  }
  