import premImage from './images/pre.png';
import seriaA from './images/seriaA.png';
import bundsleague from './images/bundsleague.png';
import bundes2 from './images/bundes2.png';
import k_league from './images/k_league.png';
import spfl from './images/spfl.png';


export default function Section(){
    return (<div>
<div className="px-4 md:px-8 bg-red-500 rounded">
  <div className="relative py-6 md:py-10 overflow-hidden  ">
    <div className="flex justify-between items-center gap-x-4">
    <img className="w-14 md:w-20 h-auto text-black  mx-auto" src={premImage} alt="premImage" />
    <img className="w-14 md:w-20 h-auto text-black  mx-auto" src={seriaA} alt="seriaA" />
    <img className="w-14 md:w-20 h-auto text-black  mx-auto" src={bundsleague} alt="bundsleague" />
    <img className="w-14 md:w-20 h-auto text-black  mx-auto" src={bundes2} alt="bundes2" />
    <img className="w-14 md:w-20 h-auto text-black  mx-auto" src={k_league} alt="k_league" />
    <img className="w-14 md:w-20 h-auto text-black  mx-auto" src={spfl} alt="spfl" />
    

      
    </div>
  </div>
</div>
    </div>);
}