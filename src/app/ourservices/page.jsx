import Link from "next/link";
import Image from "next/image";
import BackgroundBoxesDemo from "@/components/aceternityUI/BackgroundBoxesDemo";

const Ourservices = () => {
   return (
      <div className=" mt-20">
         {/* <BackgroundBoxesDemo /> */}

         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dotted-pattern">
            {/* Office Space Section */}
            <article
               id="dedicated-office"
               className="scroll-mt-24 mb-20 border-b border-gray-500"
            >
               <div className="mb-12">
                  <h1 className="text-5xl font-bold mb-6 text-gradient">
                     ECONOMICAL OFFICE SPACE:
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                     Our fully-serviced private offices offer teams of all sizes
                     an inspiring environment to focus, collaborate, and do
                     their best work. Whether you need a single desk or a whole
                     building, we provide office space that's flexible to your
                     needs and fully customisable. Available for as little as a
                     day, or as long as you need.
                  </p>
                  <Link
                     href="#contact"
                     className="text-purple-600 font-semibold hover:underline"
                  >
                     Find out more →
                  </Link>
               </div>

               {/* Private Offices Subsection */}
               <div id="private-offices" className="scroll-mt-24 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h2 className="text-3xl font-bold mb-6">
                           Private Offices
                        </h2>

                        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-8">
                           <li>
                              Fully-furnished offices for individuals, teams or
                              entire companies
                           </li>
                           <li>
                              Customisable to match your brand with company
                              logos and colour schemes
                           </li>
                           <li>For teams of all sizes</li>
                        </ul>
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg bg-[linear-gradient(135deg,#9B59B6,#3498DB)] font-semibold hover:-translate-y-0.5 transition-transform">
                           Get a quote
                        </button>
                     </div>
                     <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                           src="/images/AVten.jpg"
                           alt="Private Offices"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>

               {/* Office Membership Subsection */}
               <div id="office-membership" className="scroll-mt-24 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                           src="/images/AVnine.jpg"
                           alt="Office Membership"
                           fill
                           className="object-cover"
                        />
                     </div>
                     <div>
                        <h2 className="text-3xl font-bold mb-6">
                           Office Membership
                        </h2>

                        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-8">
                           <li>
                              Private offices available by the day, or choose 5,
                              10 or unlimited days per month
                           </li>
                           <li>
                              On-demand, fully-serviced and available at
                              thousands of locations worldwide
                           </li>
                           <li>For teams of all sizes</li>
                        </ul>
                        {/* <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                           Buy now
                        </button> */}
                     </div>
                  </div>
               </div>

               {/* Day Offices Subsection */}
               <div id="day-offices" className="scroll-mt-24 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h2 className="text-3xl font-bold mb-6">Day Offices</h2>
                        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-8">
                           <li>
                              Your very own space in a shared office – available
                              by the hour, or the day
                           </li>
                           <li>
                              Includes everything you need to get to work, from
                              WiFi to ergonomic furniture
                           </li>
                           <li>For teams of all sizes</li>
                        </ul>
                        <button className="bg-gradient-to-br from-red-400 to-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                           Book now
                        </button>
                     </div>
                     <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                           src="/images/AVeight.jpg"
                           alt="Day Offices"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>
            </article>

            {/* Coworking Section */}
            <article
               id="coworking-desk"
               className="scroll-mt-24 mb-20  border-b border-gray-500"
            >
               <div className="mb-12">
                  <h1 className="text-5xl font-bold mb-6 text-gradient">
                     Connect & Collaborate Coworking:
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                     Our coworking spaces are designed with collaboration in
                     mind. They're a great place to connect with colleagues,
                     clients and other like-minded businesses. Reserve a
                     permanent desk in your favourite space, or simply drop in
                     and hot desk at thousands of locations worldwide.
                  </p>
                  <Link
                     href="#contact"
                     className="text-purple-600 font-semibold hover:underline"
                  >
                     Find out more →
                  </Link>
               </div>

               {/* Permanent Desk Subsection */}
               <div id="permanent-desk" className="scroll-mt-24 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h2 className="text-3xl font-bold mb-6">
                           Permanent Desk
                        </h2>
                        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-8">
                           <li>
                              A desk of your own, in a shared office or
                              open-plan workspace
                           </li>
                           <li>
                              Includes discounts on meeting room and office
                              space bookings
                           </li>
                           <li>
                              Available at thousands of locations worldwide
                           </li>
                        </ul>
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg bg-[linear-gradient(135deg,#9B59B6,#3498DB)] font-semibold hover:-translate-y-0.5 transition-transform">
                           Get a quote
                        </button>
                     </div>
                     <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                           src="/images/AVfour.jpeg"
                           alt="Permanent Desk"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>

               {/* Coworking Membership Subsection */}
               <div id="coworking-membership" className="scroll-mt-24 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                           src="/images/AVfive.jpeg"
                           alt="Coworking Membership"
                           fill
                           className="object-cover"
                        />
                     </div>
                     <div>
                        <h2 className="text-3xl font-bold mb-6">
                           Coworking Membership
                        </h2>
                        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-8">
                           <li>
                              Drop in and hotdesk in inspiring spaces, where you
                              like, when you like globally
                           </li>
                           <li>
                              Available to access for 5, 10 or unlimited days
                              each month
                           </li>
                           <li>
                              Enjoy exclusive member discounts and benefits
                           </li>
                        </ul>
                        {/* <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                           Buy now
                        </button> */}
                     </div>
                  </div>
               </div>

               {/* Day Coworking Subsection */}
               <div id="day-coworking" className="scroll-mt-24 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h2 className="text-3xl font-bold mb-6">
                           Day Coworking
                        </h2>

                        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-8">
                           <li>
                              Work for the day in a vibrant, social and
                              professional environment
                           </li>
                           <li>
                              Make use of our breakout areas to meet others and
                              collaborate
                           </li>
                           <li>
                              Available at thousands of locations worldwide
                           </li>
                        </ul>
                        <button className="bg-gradient-to-br from-red-400 to-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                           Book now
                        </button>
                     </div>
                     <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                           src="/images/AVsix.jpeg"
                           alt="Day Coworking"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>
            </article>

            {/* Virtual Office Section */}
            <article
               id="virtual-office"
               className="scroll-mt-24 mb-20 border-b border-gray-500"
            >
               <div className="mb-12">
                  <h1 className="text-5xl font-bold mb-6 text-gradient">
                     Build your presence Virtual Office:
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                     Our virtual office services help you build a credible
                     presence anywhere in the world, with a professional
                     business address and phone number.
                  </p>
                  <Link
                     href="#contact"
                     className="text-purple-600 font-semibold hover:underline"
                  >
                     Find out more →
                  </Link>
               </div>

               {/* Business Address Subsection */}
               <div id="business-address" className="scroll-mt-24 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h2 className="text-3xl font-bold mb-6">
                           Business Address
                        </h2>

                        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-8">
                           <li>
                              Give your business the professional address it
                              needs in a premier location
                           </li>
                           <li>
                              Use the address on your documents and have mail
                              forwarded there
                           </li>
                           <li>
                              Available at thousands of locations worldwide
                           </li>
                        </ul>
                        {/* <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                           Buy now
                        </button> */}
                     </div>
                     <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                           src="/images/AVseven.jpeg"
                           alt="Business Address"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>

               {/* Virtual Office Subsection */}
               <div id="virtual-office-basic" className="scroll-mt-24 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                           src="/images/AVone.jpeg"
                           alt="Virtual Office"
                           fill
                           className="object-cover"
                        />
                     </div>
                     <div>
                        <h2 className="text-3xl font-bold mb-6">
                           Virtual Office
                        </h2>

                        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-8">
                           <li>
                              Everything included in our 'Business Address'
                              solution plus:
                           </li>
                           <li>Access to 5 days of coworking</li>
                           <li>Call handling services are also available</li>
                        </ul>
                        {/* <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                           Buy now
                        </button> */}
                     </div>
                  </div>
               </div>

               {/* Virtual Office Plus Subsection */}
               <div id="virtual-office-plus" className="scroll-mt-24 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h2 className="text-3xl font-bold mb-6">
                           Virtual Office Plus
                        </h2>
                        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-8">
                           <li>
                              A winning combination of virtual office services
                              and workspace access
                           </li>
                           <li>
                              Includes meeting room use and 5 days office or
                              desk space per month
                           </li>
                           <li>Plus access to 5 days of coworking</li>
                        </ul>
                        <button className="bg-gradient-to-br from-red-400 to-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                           Book now
                        </button>
                     </div>
                     <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                           src="/images/AVtwo.jpeg"
                           alt="Virtual Office Plus"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>
            </article>

            {/* Meeting Rooms Section */}
            <article id="meeting-rooms" className="scroll-mt-24 mb-20">
               <div className="mb-12">
                  <h1 className="text-5xl font-bold mb-6 text-gradient">
                     Bring teams together Meeting Rooms:
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                     Our meeting rooms are the perfect setting for your next
                     pitch, interview, workshop or board meeting. They come with
                     the latest technology, a friendly support team to ensure
                     everything runs smoothly, and catering if you need it.
                  </p>
                  <Link
                     href="#contact"
                     className="text-purple-600 font-semibold hover:underline"
                  >
                     Find out more →
                  </Link>
               </div>

               {/* Meeting Room Subsection */}
               <div id="meeting-room" className="scroll-mt-24 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h2 className="text-3xl font-bold mb-6">
                           Meeting Room
                        </h2>

                        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-8">
                           <li>
                              Select from a wide range of meeting room sizes
                           </li>
                           <li>
                              Available with presentation facilities and
                              optional catering as required
                           </li>
                           <li>Choose from thousands of locations worldwide</li>
                        </ul>
                        {/* <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                           Book now
                        </button> */}
                     </div>
                     <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                           src="/images/AVthree.jpeg"
                           alt="Meeting Room"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>

               {/* Conference Room Subsection */}
               <div id="conference-room" className="scroll-mt-24 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                           src="/images/AVten.jpg"
                           alt="Conference Room"
                           fill
                           className="object-cover"
                        />
                     </div>
                     <div>
                        <h2 className="text-3xl font-bold mb-6">
                           Conference Room
                        </h2>

                        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-8">
                           <li>
                              The perfect spaces to host pitches or board
                              meetings
                           </li>
                           <li>
                              Equipped with presentation facilities, whiteboards
                              and optional catering
                           </li>
                           <li>Choose from thousands of locations worldwide</li>
                        </ul>
                        {/* <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                           Book now
                        </button> */}
                     </div>
                  </div>
               </div>

               {/* Training Room Subsection */}
               <div id="training-room" className="scroll-mt-24 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h2 className="text-3xl font-bold mb-6">
                           Training Room
                        </h2>

                        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-8">
                           <li>
                              Purpose-built training spaces with break-out areas
                           </li>
                           <li>
                              On-site support team included and optional
                              catering available
                           </li>
                           <li>Choose from thousands of locations worldwide</li>
                        </ul>
                        <button className="bg-gradient-to-br from-red-400 to-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                           Book now
                        </button>
                     </div>
                     <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                           src="/images/AVnine.jpg"
                           alt="Training Room"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>
            </article>
         </section>
      </div>
   );
};

export default Ourservices;
