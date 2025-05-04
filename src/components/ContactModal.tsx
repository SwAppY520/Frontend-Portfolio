// 'use client'

// import copyPasteIcon from "@/assets/images/copy-paste-icon.png";
// import ArrowUpRightIcon  from "@/assets/icons/arrow-up-right.svg";
// import { useState } from 'react'

// const EMAIL = 'skalambe520@gmail.com'

// export default function ContactModal() {
//   const [open, setOpen] = useState(false)
//   const [copied, setCopied] = useState(false)
//   const [name, setName] = useState('')
//   const [message, setMessage] = useState('')

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(EMAIL)
//     setCopied(true)
//     setTimeout(() => setCopied(false), 2000)
//   }

//   return (
//     <>
//       {/* Contact Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 transition"
//       >
//        <span>Let's Connect</span>
//         <ArrowUpRightIcon className="size-4"/>
//       </button>
     

//       {/* Overlay + Modal */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
//           <div className="bg-stone-800 p-8 rounded-xl shadow-lg sm:w-3/4 md:w-2/4 bottom-0 animate-fade-in relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-1 right-4 text-gray-500 hover:text-white text-xl"
//             >
//               ×
//             </button>

          
//            <a href="mailto:skalambe520@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20there%2C%20I%20saw%20your%20portfolio%20and..." className="cursor-pointer ">
//         <button className="text-white inline-flex items-center px-6 h-9 rounded-lg gap-2 w-max border border-stone-700 mb-4">
//         <span className="font-mono">Skalambe520@gmail.com</span>
//         <ArrowUpRightIcon className="size-4"/>
//         </button>
//         </a>
          

//         <hr />

//             <form className="space-y-4 font-sans select-none mt-4">
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 required
//                 className="w-full h-12 p-2 rounded-lg bg-stone-900 text-white "
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <textarea
//                 placeholder="Your Message"
//                 className="w-full p-2 rounded-lg bg-stone-900 text-white"
//                 rows={8}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//               <div className="flex justify-between items-center bg-no-repeat" >
//                 <button
//                   type="button"
//                   onClick={copyToClipboard}
//                   className="text-sm text-white h-6 flex gap-4 bg-no-repeat font-mono" style={{
//                     backgroundImage: `url(${copyPasteIcon.src})`,
//                     }}
//                 >
//                   <span className="ml-7">skalambe520@gmail.com</span>
//                 </button>
//                 {copied && (
//                   <span className="text-green-500 text-sm">Copied!</span>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-white text-black p-2 rounded mt-2 font-semibold"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }
