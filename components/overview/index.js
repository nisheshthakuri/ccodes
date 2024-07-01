import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faGlobe,
	faLocationDot,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import Skills from "../skills/index";
import Projects from "../projects/index";
import Image from "next/image";
export default function Overview({ skillsSectionRef, projectSectionRef }) {
	return (
		<>
			{/* overview */}
			<div className="flex flex-col w-full items-center md:items-start lg:items-start xl:items-start md:flex-row lg:flex-row xl:flex-row mx-2 md:mx-2 lg:mx-11 xl:mx-11">
				<div className="w-9/12 md:w-4/12 lg:w-3/12 xl:w-3/12 border-solid border border-slate-100 bg-white shadow-lg rounded-lg my-4 ">
					<div className="flex flex-col bg-slate-50 rounded-lg p-2 m-2">
						<div className="flex flex-row items-center w-full">
							<Image alt="iamge" src="/girl.png" width={50} height={50} />
							<div className="flex flex-row mx-3 gap-20 md:gap-10 lg:gap-20 xl:gap-20">
								<span className="text-[#4D5154] ">Featured Interests</span>
								<span className="text-[#4D5154]">...</span>
							</div>
						</div>
					</div>
					<div className="flex m-4 gap-5 md:gap-2 lg:gap-5 xl:gap-5 w-full">
						<button className="border border-solid rounded-xl ">
							<div className="flex flex-row items-center p-1">
								<Image
									alt="iamge"
									src="/leaf.png"
									width={17}
									height={17}
								></Image>
								<Image
									alt="iamge"
									src="/chefkiss.jpeg"
									width={17}
									height={17}
								></Image>

								<p className="text-[#4CBB17] bolder mx-1 md:text-xs lg:text-base xl:text-base">
									Nature
								</p>
							</div>
						</button>
						<button className="border border-solid rounded-xl">
							<div className="flex flex-row items-center p-1">
								<Image
									alt="iamge"
									src="/hiking.png"
									width={17}
									height={17}
								></Image>
								<p className="text-[#F28C28] bolder mx-1 md:text-xs lg:text-base xl:text-base">
									{" "}
									Trekking
								</p>
							</div>
						</button>
					</div>
					<div className="flex m-4 gap-5 md:gap-1 lg:gap-5 xl:gap-5 w-full ">
						<button className="border border-solid rounded-xl">
							<div className="flex flex-row items-center p-1">
								<Image
									alt="iamge"
									src="/paint.png"
									width={17}
									height={17}
								></Image>
								<p className="text-[#800080] bolder  mx-1 md:my-1 mx-0 lg:mx-1 xl:mx-1 md:text-xs lg:text-base xl:text-base">
									{" "}
									Drawing/Painting
								</p>
							</div>
						</button>
						<button className="border border-solid rounded-xl ">
							<div className="flex flex-row items-center p-1">
								<Image
									alt="iamge"
									src="/cooking.png"
									width={17}
									height={17}
								></Image>
								<p className="text-[#FA5F55] bolder mx-1 md:my-1 mx-0 lg:mx-1 xl:mx-1  md:text-xs lg:text-base xl:text-base">
									Cooking{" "}
								</p>
							</div>
						</button>
					</div>
					<div className="flex m-4 gap-5 w-full">
						<button className="border border-solid rounded-xl">
							<div className="flex flex-row items-center p-1">
								<Image
									alt="iamge"
									src="/cutlery.png"
									width={17}
									height={17}
								></Image>
								<p className="text-[#800080] bolder mx-1 md:text-xs lg:text-base xl:text-base">
									{" "}
									Foodie
								</p>
							</div>
						</button>
					</div>
				</div>
				{/* <div className="border-solid border rounded-lg mx-5 my-4 px-5 py-5 w-8/12"> */}
				<div className="border-solid border border-slate-100 shadow-lg rounded-lg mx-0 md:mx-5 lg:mx-5 xl:mx-5 my-4 px-5 py-5 w-full md:w-8/12 lg:w-8/12 xl:w-8/12">
					<span className="text-[#4299e1] font-semibold text-base">
						About me
					</span>
					<br></br>
					<div className="mt-3">
						<span>
							Hey, I am a skilled software developer specializing in various
							domains and technologies. With a strong background in software
							development, I am well-equipped to tackle a wide range of
							projects. I am down for freelance opportunities and am open to
							remote work arrangements.
						</span>
					</div>
					<div className="flex flex-col gap-7 my-4 md:flex-row md:flex-wrap md:gap-7">
						<div className="flex flex-row items-center gap-3 mt-5">
							<div className="border border-dashed rounded-full inline-block px-2 py-1 items-center">
								<FontAwesomeIcon icon={faUser} style={{ color: "#4299e1" }} />
							</div>
							<div>
								<p className="text-[#4299e1]">Designation:</p>
								<p className="text-[#4D5154] bolder">Software Engineer</p>
							</div>
						</div>
						<div className="flex flex-row items-center gap-3 mt-5">
							<div className="border border-dashed rounded-full inline-block px-2 py-1 items-center">
								<FontAwesomeIcon icon={faGlobe} style={{ color: "#4299e1" }} />
							</div>
							<div>
								<p className="text-[#4299e1]">Blog:</p>
								<p className="text-[#4D5154] bolder">style.food.blog</p>
							</div>
						</div>
						<div className="flex flex-row items-center gap-3 mt-5">
							<div className="border border-dashed rounded-full inline-block px-2 py-1 items-center">
								<FontAwesomeIcon
									icon={faEnvelope}
									style={{ color: "#4299e1" }}
								/>
							</div>
							<div>
								<p className="text-[#4299e1]">E-mail:</p>
								<p className="text-[#4D5154] bolder">
									seema.tamang640@gmail.com
								</p>
							</div>
						</div>
						<div className="flex flex-row items-center gap-3 mt-5">
							<div className="border border-dashed rounded-full inline-block px-2 py-1 items-center">
								<FontAwesomeIcon
									icon={faLocationDot}
									style={{ color: "#4299e1" }}
								/>
							</div>
							<div>
								<p className="text-[#4299e1]">Location:</p>
								<p className="text-[#4D5154] bolder">Kathmandu, Nepal</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* skills */}
			<Skills skillsSectionRef={skillsSectionRef} />
			<Projects projectSectionRef={projectSectionRef} />
		</>
	);
}
