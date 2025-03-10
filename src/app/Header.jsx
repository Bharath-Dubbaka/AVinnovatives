"use client";
import Link from "next/link";

const Header = () => {
   return (
      <header className="border-b bg-white/70 backdrop-blur-md fixed top-0 w-full z-50">
         <div className="mx-auto px-4">
            <div className="flex items-center space-x-2 justify-between h-[5.3rem]">
               {/* Logo */}
               <Link href="/" className="flex items-center space-x-1 ml-8">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 200 200"
                     width={60}
                     height={60}
                     style={{ display: "block" }}
                  >
                     <defs>
                        <linearGradient
                           id="avGradient"
                           x1="0%"
                           y1="0%"
                           x2="100%"
                           y2="100%"
                        >
                           <stop offset="0%" stopColor="#FF6B6B" />
                           <stop offset="50%" stopColor="#9B59B6" />
                           <stop offset="100%" stopColor="#3498DB" />
                        </linearGradient>

                        <pattern
                           id="dotPattern"
                           patternUnits="userSpaceOnUse"
                           width="10"
                           height="10"
                        >
                           <circle
                              cx="2"
                              cy="2"
                              r="1.5"
                              fill="rgba(255,255,255,0.2)"
                           />
                        </pattern>
                     </defs>

                     {/* Background with subtle texture */}
                     <rect
                        width="100%"
                        height="100%"
                        fill="url(#avGradient)"
                        rx="20"
                     />
                     <rect
                        width="100%"
                        height="100%"
                        fill="url(#dotPattern)"
                        rx="20"
                     />

                     {/* AV Letters */}
                     <path
                        d="M70 70 L50 130 M70 70 L90 130"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="12"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                     />
                     <path
                        d="M110 70 L130 130 L150 70"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
                  {/* <div className="flex flex-col"> */}
                  <span
                     className={`text-[2.3rem] pb-2 flex justify-end items-baseline font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300`}
                  >
                     <span className="text-[1.5rem] font-light">
                        {" "}
                        innovations
                     </span>
                     {/* <span className="text-xs text-black font-normal"> */}
                     {/* prod by <span className="font-bold"> CVtoSalary</span> */}
                     {/* </span> */}
                  </span>
                  {/* </div> */}
               </Link>

               {/* Navigation */}
               <nav className="hidden md:flex items-center space-x-8">
                  {["ourServices", "Gallery", "Contact"].map((item) => (
                     <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className="text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-200 hover:scale-105 transform"
                     >
                        {item}
                     </Link>
                  ))}
               </nav>

               {/* User Section */}
            </div>
         </div>
      </header>
   );
};

export default Header;
