export default function Dashboard() {
   return (
      <div className="min-h-screen  px-20 py-4 dotted-pattern">
         <div className="max-w-[1400px] mx-auto backdrop-blur-lg bg-white/90 rounded-3xl p-10 shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
               {/* <AVLogo /> */}
               <div className="flex gap-5">
                  <button className="px-6 py-3 rounded-lg bg-[linear-gradient(135deg,#9B59B6,#3498DB)] text-white font-semibold hover:-translate-y-0.5 transition-transform">
                     Book Space
                  </button>
                  <button className="px-6 py-3 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white font-semibold hover:-translate-y-0.5 transition-transform">
                     Add Event
                  </button>
               </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mb-10">
               <StatCard title="Active Members" value="142" trend="↑ 12%" />
               <StatCard
                  title="Available Spaces"
                  value="8/24"
                  trend="3 reserved"
               />
               <StatCard title="Events Today" value="4" trend="2 upcoming" />
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-2 gap-10">
               {/* Workspace Map */}
               <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">
                     Workspace Map
                  </h3>
                  <div className="h-96 bg-gray-100 rounded-xl">
                     {/* Interactive map placeholder */}
                  </div>
               </div>

               {/* Upcoming Events */}
               <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">
                     Upcoming Events
                  </h3>
                  <div className="flex flex-col gap-4">
                     <EventItem time="10:00 AM" title="Startup Workshop" />
                     <EventItem time="2:30 PM" title="Team Building" />
                     <EventItem time="6:00 PM" title="Networking Mixer" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

// Helper components
const StatCard = ({ title, value, trend }) => (
   <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h4 className="text-base font-semibold mb-2 text-gray-800">{title}</h4>
      <div className="flex items-baseline gap-3">
         <span className="text-3xl font-bold text-gray-900">{value}</span>
         <span className="text-purple-500 text-sm">{trend}</span>
      </div>
   </div>
);

const EventItem = ({ time, title }) => (
   <div className="bg-white p-4 rounded-2xl flex gap-3 items-center">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-purple-500 grid place-items-center text-white font-medium">
         {time.split(":")[0]}
      </div>
      <div>
         <div className="font-semibold mb-1 text-gray-800">{title}</div>
         <div className="text-gray-500 text-sm">{time}</div>
      </div>
   </div>
);
