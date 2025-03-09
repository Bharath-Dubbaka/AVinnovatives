import Image from "next/image";
import Dashboard from "./Dashboard";
import Hero from "./Hero";
import BookingCompo from "@/components/BookingCompo";
import Amenities from "@/components/Amenities";

export default function Home() {
   return (
      <div>
         <Hero />
         <BookingCompo />
         <Amenities />
         
         {/* <Dashboard /> */}
      </div>
   );
}
