import React from "react";
import Link from "next/link";

const Footer = () => {
   return (
      <footer className="bg-white border-t">
         <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {/* Brand Column */}
               <div className="space-y-4 pr-10">
                  {/* <h2 className="flex flex-col text-2xl font-bold text-gradient ">
                     AVinnovations
                     <span className="text-xs text-black font-normal">
                        our place,{" "}
                        <span className="font-bold"> your comfort</span>
                     </span>
                  </h2> */}
                  <Link href="/" className="flex items-center space-x-1 ">
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
                  <p className="text-slate-600">
                     We love what we do and therefore come up with the best
                     possible solutions to help you get an office space faster
                     and cheaper
                  </p>
               </div>

               {/* Product Column */}
               <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link
                           href="/ourservices"
                           className="text-slate-600 hover:text-slate-900 hover:underline"
                        >
                           Services
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/gallery"
                           className="text-slate-600 hover:text-slate-900 hover:underline"
                        >
                           Gallery
                        </Link>
                     </li>
                     {/* <li>
                        <Link
                           href="/features"
                           className="text-slate-600 hover:text-slate-900"
                        >
                           Features
                        </Link>
                     </li> */}
                  </ul>
               </div>

               {/* Company Column */}
               <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link
                           href="/"
                           className="text-slate-600 hover:text-slate-900  hover:underline"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/contact"
                           className="text-slate-600 hover:text-slate-900 hover:underline"
                        >
                           Contact
                        </Link>
                     </li>
                     {/* <li>
                        <Link
                           href="/blog"
                           className="text-slate-600 hover:text-slate-900"
                        >
                           Blog
                        </Link>
                     </li> */}
                  </ul>
               </div>

               {/* Legal Column */}
               <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Reach@</h3>
                  <ul className="space-y-3">
                     <li>
                        <div className="text-slate-600 hover:text-slate-900">
                           +91-888 503 0670
                        </div>
                        <div className="text-slate-600 hover:text-slate-900">
                           +91-988 526 9630
                        </div>
                     </li>
                     <li>
                        <div className="text-slate-600 hover:text-slate-900">
                           Veera562@gmail.com / Anandyedugani1995@gmail.com
                        </div>
                     </li>
                     {/* <li>
                        <Link
                           href="/refundandcancellation"
                           className="text-slate-600 hover:text-slate-900"
                        >
                           Refund and Cancellation
                        </Link>
                     </li> */}
                     {/* <li>
                        <Link
                           href="/cookies"
                           className="text-slate-600 hover:text-slate-900"
                        >
                           Cookie Policy
                        </Link>
                     </li> */}
                  </ul>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t mt-12 pt-8">
               <p className="text-center text-slate-600">
                  © {new Date().getFullYear()} AVinnovations. All rights
                  reserved.
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
