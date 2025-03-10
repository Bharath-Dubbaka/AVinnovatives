import {
   Wifi,
   Clock,
   Zap,
   Paintbrush,
   Train,
   Video,
   Users,
   Sparkles,
   Sofa,
   CalendarDays,
   Printer,
   Presentation,
   Utensils,
   PlugZap,
} from "lucide-react";

const Amenities = () => {
   const amenities = [
      {
         title: "Plug & Play Office",
         description: "100% power backup & ready-to-use workspaces",
         icon: <PlugZap className="w-10 h-16 text-emerald-600" />,
      },
      {
         title: "Kitchen/Pantry",
         description: "Fully equipped kitchen and snack stations",
         icon: <Utensils className="w-10 h-16 text-amber-600" />,
      },
      {
         title: "Modern Design",
         description: "Sleek Aesthetics, Contemporary Elegance",
         icon: <Paintbrush className="w-10 h-16 text-pink-600" />,
      },
      {
         title: "High Speed Internet",
         description: "Free seamless Connectivity, Rapid Speeds",
         icon: <Wifi className="w-10 h-16 text-blue-600" />,
      },
      {
         title: "24x7 Access",
         description: "Uninterrupted Availability Around The Clock",
         icon: <Clock className="w-10 h-16 text-green-600" />,
      },
      {
         title: "Power Back-up",
         description: "Reliable Power, Uninterrupted Operations",
         icon: <Zap className="w-10 h-16 text-yellow-600" />,
      },
      {
         title: "Conference Rooms",
         description: "Where Ideas Take Flight",
         icon: <Users className="w-10 h-16 text-indigo-600" />,
      },
      {
         title: "24x7 Surveillance",
         description: "Maximum Safety and Protection",
         icon: <Video className="w-10 h-16 text-red-600" />,
      },
      {
         title: "Housekeeping",
         description: "Impeccable Care, Seamless Comfort",
         icon: <Sparkles className="w-10 h-16 text-teal-600" />,
      },
      {
         title: "Lounge Area",
         description: "Casual spaces for relaxation and informal meetings",
         icon: <Sofa className="w-10 h-16 text-orange-600" />,
      },
      {
         title: "Accessible commute",
         description: "Footsteps away from Metro Stations and Bus Stops",
         icon: <Train className="w-10 h-16 text-purple-600" />,
      },

      {
         title: "Events",
         description: "Innovative Ventures and Vibrant Networking",
         icon: <CalendarDays className="w-10 h-16 text-rose-600" />,
      },
      {
         title: "Printing",
         description: "Efficient Printing Solutions Are Available",
         icon: <Printer className="w-10 h-16 text-gray-600" />,
      },
      {
         title: "Projector",
         description: "High-Definition Projectors for Seamless Presentations",
         icon: <Presentation className="w-10 h-16 text-cyan-600" />,
      },
   ];

   return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dotted-pattern">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
               <h2 className="text-4xl font-bold text-center mb-2  underline ">
                  AMENITIES:
               </h2>
               <p className="text-xl text-gray-600 mb-4">
                  Only, Some of many!!!
               </p>
               <p className="text-gray-500 max-w-2xl mx-auto">
                  our place, your comfort lorem ipsum blah yada yada yada, lorem
                  ipsum blah yada yada yadalorem ipsum blah yada yada yadalorem
                  ipsum blah yada yada yadalorem ipsum blah yada yada yada
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {amenities.map((amenity, index) => (
                  <div
                     key={index}
                     className="bg-white p-6 rounded-lg shadow-xl hover:shadow-md duration-300 hover:-translate-y-1.5 transition-transform"
                  >
                     <div className="flex items-start gap-4 py-4 my-2">
                        <span className="p-2 rounded-lg bg-gradient-to-br from-blue-300/40  to-pink-300/40 animate-gradient-xy">
                           {amenity.icon}
                        </span>
                        <div>
                           <h3 className="text-lg font-semibold mb-2">
                              {amenity.title}
                           </h3>
                           <p className="text-gray-600 text-sm">
                              {amenity.description}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Amenities;
