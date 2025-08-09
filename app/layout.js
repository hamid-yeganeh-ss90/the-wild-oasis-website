import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import {ReservationProvider} from "@/app/_components/ReservationContext";
import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export const metadata = {
  title: {
    template: "%s / the wild oasis",
    default: "Welcome / the wild oasis",
  },
  description:
    "luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mounatins and dark forests",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid ">
          <main className="max-w-7xl mx-auto w-full">
		  <ReservationProvider>
			  {children}
		  </ReservationProvider>
		  </main>
        </div>
      </body>
    </html>
  );
}
