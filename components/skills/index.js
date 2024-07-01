import Image from "next/image";

export default function Skills({ skillsSectionRef }) {
	return (
		<div
			id="skills"
			ref={skillsSectionRef}
			className="mx-11 my-20 flex flex-row p-2 gap-9  justify-start md:justify-center lg:justify-start xl:justify-start  lg:gap-9 xl:gap-9 md:mx-1 lg:mx-11 xl:mx-11 flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap"
		>
			<div className="flex flex-col bg-white shadow-lg p-5 mb-0 md:mb-0 lg:mb-12 xl:mb-12 rounded-2xl justify-center items-center md:w-9/12 lg:w-1/4 xl:w-1/4   border border-solid border-slate-100">
				<div>
					<Image alt="image" src="/ux.png" width={75} height={70} />
				</div>
				<div className="flex flex-col items-center justify-center my-5 p-2">
					<h1 className="font-bold text-xl mb-4">Web Development</h1>
					<p className="text-slate-500 text-lg text-center">
						Intermediate Knowledge of using MERN and Next.js for web
						development.
					</p>
				</div>
			</div>
			<div className="flex flex-col bg-white shadow-lg p-10 mt-0 md:mt-0 lg:mt-12 xl:mt-12 rounded-2xl justify-center items-center md:w-9/12 lg:w-1/4 xl:w-1/4   border border-solid border-slate-100">
				<div>
					<Image alt="image" src="/ux-design.png" width={75} height={70} />
				</div>
				<div className="flex flex-col items-center justify-center my-5 p-2">
					<h1 className="font-bold text-xl mb-4">UI/UX Design</h1>
					<p className="text-slate-500 text-lg text-center">
						Create user-friendly and visually appealing interfaces using
						Html/Css and Javascript.
					</p>
				</div>
			</div>
			<div className="flex flex-col bg-white shadow-lg p-10 mb-0 md:mb-0 lg:mb-12 xl:mb-12 rounded-2xl justify-center items-center md:w-9/12 lg:w-1/4 xl:w-1/4   border border-solid border-slate-100">
				<div>
					<Image
						alt="image"
						src="/technical-support.png"
						width={75}
						height={70}
					/>
				</div>
				<div className="flex flex-col items-center justify-center my-5 p-2">
					<h1 className="font-bold text-xl mb-4">Wordpress</h1>
					<p className="text-slate-500 text-lg text-center">
						Build responsive websites using wordpress plugins.
					</p>
				</div>
			</div>
			<div className="flex flex-col bg-white shadow-lg p-10 mt-0 md:mt-0 lg:mt-12 xl:mt-12 rounded-2xl justify-center items-center md:w-9/12 lg:w-1/4 xl:w-1/4   border border-solid border-slate-100">
				<div>
					<Image alt="image" src="/smartphone.png" width={75} height={70} />
				</div>
				<div className="flex flex-col items-center justify-center my-5 p-2">
					<h1 className="font-bold text-xl mb-4 text-center">
						Android Development
					</h1>
					<p className="text-slate-500 text-lg text-center">
						Deliver android applications using Android framework and libraries.
					</p>
				</div>
			</div>
		</div>
	);
}
