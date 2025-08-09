"use client"
import {useSearchParams, useRouter, usePathname} from "next/navigation"

export default function Filter(){
		const pathname = usePathname()
	const searchParams = useSearchParams();
	const activedFilter = searchParams.get("capacity") ?? "all"
	const router = useRouter();
	function handleFilter (filter){
		const params = new URLSearchParams(searchParams);
		params.set("capacity", filter);
		router.replace(`${pathname}?${params.toString()}`, {scroll:false});
		}
	return (
	<div className="border border-primary-800 flex" >
		<FilterButton
		filter="all"
		activedFilter={activedFilter}
		handleFilter={handleFilter}
		>
			All Cabins
		</FilterButton>
		
		<FilterButton
		filter="small"
		activedFilter={activedFilter}
		handleFilter={handleFilter}
		>
			1&mdash;3 Guests
		</FilterButton>
		
		<FilterButton
		filter="medium"
		activedFilter={activedFilter}
		handleFilter={handleFilter}
		>
			4&mdash;7 Guests
		</FilterButton>
		
		<FilterButton 
		filter="large"
		activedFilter={activedFilter}
		handleFilter={handleFilter}
		>
			8&mdash;12 Guests
		</FilterButton>
	</div>
	)
}

function FilterButton ({filter, activedFilter, handleFilter, children }){
	   return <button 
		onClick={()=>handleFilter(filter)}
		className={`px-5 py-2 transition-all duration-500 hover:bg-primary-700 ${activedFilter===filter ? "bg-primary-700" : ""}`}
		>
		{children}
		</button>
} 