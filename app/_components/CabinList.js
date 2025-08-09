//import {unstable_noStore as noStore} from "next/cache"
import CabinCard from "@/app/_components/CabinCard";
import {getCabins} from "@/app/_lib/data-service"

export default async function CabinList ({filter}){
	//noStore ();
	  const cabins = await getCabins();
	  let filteredCabins;
	  if(filter==="all") filteredCabins = cabins;
	  if(filter==="small") filteredCabins = cabins.filter( cabin => cabin.maxCapacity <= 3);
	  if(filter==="medium") filteredCabins = cabins.filter( cabin => cabin.maxCapacity > 3 && cabin.maxCapacity < 8 )	  
	  if(filter==="large") filteredCabins = cabins.filter( cabin => cabin.maxCapacity >= 8);
	  
	if(!cabins.length) return null;              
       return (                                  
	   <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {filteredCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
		)
      
}