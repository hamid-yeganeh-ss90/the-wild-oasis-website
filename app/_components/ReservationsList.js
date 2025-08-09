"use client";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/action";

function ReservationsList({ bookings }) {
  const [opimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBooking, bookingId) =>
      curBooking.filter((booking) => booking.id !== bookingId)
  );
  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }
  return (
    <ul className='space-y-6'>
      {opimisticBookings.map((booking) => (
        <ReservationCard
          onDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationsList;
