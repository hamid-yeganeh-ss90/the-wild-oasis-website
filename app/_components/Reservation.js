import {getSettings} from "@/app/_lib/data-service";
import {getBookedDatesByCabinId} from "@/app/_lib/data-service";
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import LoginMessage from "@/app/_components/LoginMessage";
import {auth} from "@/app/_lib/auth";
export default async function Reservation ({cabin}){
	const session = await auth ()
	 const bookedDates = await getBookedDatesByCabinId (cabin.id) ;

return (
	<div className="grid grid-cols-2 border border-primary-800 min-h-[400px]" >
			<DateSelector
			bookedDates={bookedDates}
			cabin={cabin}
			/>
			{ session?.user ? 
			<ReservationForm cabin={cabin} user={session?.user} /> :
			<LoginMessage/>
				}
	</div>
		)
}