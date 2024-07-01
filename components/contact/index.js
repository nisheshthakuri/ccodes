import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Contact({ contactSectionRef }) {
	return (
		<div
			id="Contact"
			ref={contactSectionRef}
			className="flex flex-row  rounded  p-10"
		>
			<div className="flex  w-full flex-wrap  shadow bg-gray ">
				<div className="bg-[#FFFFFF] w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-8 flex flex-col  items-center justify-center">
					<Image alt="image" src="/girl.jpeg" width={200} height={200}></Image>
					<span className="text-[#1C4ED8] text-xl mb-3 bold">
						Contact Information
					</span>
					<br />
					<span className="text-[#4D5154]">
						Fill up the form and I will get back to you within 24 hours.
					</span>
					<div className="flex flex-col  gap-5 mt-5">
						<div className="flex flex-row items-center gap-2">
							<FontAwesomeIcon icon={faEnvelope} style={{ color: "#1C4ED8" }} />
							<span className="text-[#4D5154]">seema.tamang640@gmail.com</span>
						</div>
						<div className="flex flex-row items-center gap-2">
							<FontAwesomeIcon
								icon={faLocationDot}
								style={{ color: "#1C4ED8" }}
							/>
							<span className="text-[#4D5154]">Kathmandu, Nepal</span>
						</div>
					</div>
				</div>
				<div className="bg-[#E9E9E9] w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-8 flex flex-col justify-center gap-2">
					<form className="flex flex-col justify-center gap-4">
						<div className="mb-4 flex flex-col justify-center gap-2">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="name"
							>
								Email
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="name"
								type="text"
								placeholder="Email"
							/>
						</div>
						<div className="mb-4 flex flex-col justify-center gap-2">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="name"
							>
								Message
							</label>
							<textarea
								type="text"
								className="block w-full rounded-md border-0 py-1.5 pl-1 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
								placeholder=" Your Message to me"
							></textarea>

							<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right mt-9">
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* <div className="flex flex-col w-3/5 p-20">
                   <span className="text-[#4D5154] text-xl mb-3 bold">Contact Information</span>
                   <span className='text-[#4D5154]'>Fill up the form and I will get back to you within 24 hours.</span>
                   <div className='flex flex-col  gap-5 mt-5'>
                       <div className='flex flex-row items-center gap-2'>
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "#4299e1",}} />
                     <span className='text-[#4D5154]'>seema.tamang640@gmail.com</span>
                     </div>
                     <div className='flex flex-row items-center gap-2'>
                     <FontAwesomeIcon icon={faLocationDot} style={{color: "#4299e1",}} />
                     <span className='text-[#4D5154]'>Kathmandu, Nepal</span>
                     </div>
                    
                   </div>
                   </div>
                   <div className="w-2/5  bg-blue-100 rounded p-10">
                    <span>Name</span>
                   <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-1 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"  placeholder="Name" ></input>
                  
                   <br/>
                   <span>Email</span>
                   <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-1 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 " placeholder="Email"></input>
                   <br/>
                   <span>Message</span>
                   <textarea type="text" className="block w-full rounded-md border-0 py-1.5 pl-1 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="Message"></textarea>
                   <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right mt-5" >Send Message</button>
            

              
                     </div>
                    */}
		</div>
	);
}
