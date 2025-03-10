import React from "react";
import Image from "next/image";
import Link from "next/link";

const BookingCompo = ({
   title = "WHAT ARE YOU LOOKING FOR:",
   subtitle = "Get the best deal and book straight away!",
   description = "We love what we do and therefore come up with the best possible solutions to help you get an office space faster and cheaper. Now you can purchase online for the best price, pick a product from below.",
}) => {
   const bookingItems = [
      {
         title: "COWORKING DESK",
         products: 8,
         price: 45,
         tag: null,
         image: "/images/AVfour.jpeg",
         sectionId: "coworking-desk",
         description:
            "Explore flexible private office spaces lorem ipsum lorem ipsum designed to boost your productivity.",
      },
      {
         title: "DEDICATED OFFICE",
         products: 4,
         price: 25,
         tag: null,
         image: "/images/AVseven.jpeg",
         sectionId: "dedicated-office",
         description:
            "Flexible private lorem ipsum lorem ipsum office spaces designed to boost your productivity.",
      },
      {
         title: "VIRTUAL OFFICE",
         products: 3,
         price: 85,
         tag: null,
         image: "/images/AVsix.jpeg",
         sectionId: "virtual-office",
         description:
            "Private lorem ipsumv lorem ipsum office spaces designed to boost your productivity.",
      },
      {
         title: "MEETING ROOMS",
         products: 3,
         price: 15,
         tag: null,
         image: "/images/AVthree.jpeg",
         sectionId: "meeting-rooms",
         description:
            "Productivity flexible private lorem um lorem ipsum office spaces designed to boost your design and UI/UX.",
      },
   ];

   return (
      <section className="py-16 px-4 md:pt-24 sm:px-6 lg:px-8 bg-gray-50 dotted-pattern">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-4xl font-bold text-gray-900 mb-4  underline">
                  {title}
               </h2>
               <p className="text-xl text-gray-600 mb-6">{subtitle}</p>
               <p className="text-gray-500 max-w-2xl mx-auto">{description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {bookingItems.map((item, index) => (
                  <div
                     key={index}
                     className=" bg-white  rounded-lg shadow-xl border border-neutral-200 overflow-hidden hover:shadow-lg  duration-300 hover:-translate-y-1.5 transition-transform"
                  >
                     {/* Image Section */}
                     <div className="relative min-h-48 w-full">
                        <Image
                           src={item.image}
                           alt={item.title}
                           fill
                           className="object-cover"
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                           quality={75}
                        />
                     </div>

                     {/* Content Section */}
                     <div className="p-6 min-h-full ">
                        {item.tag && (
                           <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                              {item.tag}
                           </span>
                        )}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                           {item.title}
                        </h3>

                        <p className="text-gray-500 text-sm mb-4">
                           {item.description}
                        </p>

                        <div className="border-t border-gray-200 my-4" />

                        <div className="flex flex-col gap-3">
                           <Link
                              href="/contact"
                              className="w-full text-white py-2 px-4 rounded-md bg-[linear-gradient(135deg,#9B59B6,#3498DB)] font-semibold hover:-translate-y-0.5 transition-transform text-center"
                           >
                              Get a Quote
                           </Link>

                           <Link
                              href={`/ourservices#${item.sectionId}`}
                              className="w-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 hover:-translate-y-0.5 py-2 px-4 rounded-md transition-all duration-300 text-center"
                           >
                              Know More
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default BookingCompo;
