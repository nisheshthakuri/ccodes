import Image from "next/image";
import { useRouter } from "next/router";
import TabsInfo from "../tabsInfo";
export default function Introduction(props) {
	const { darkMode, setDarkMode } = props;
	const router = useRouter();
	const forwardLink = (href) => {
		router.push(href);
	};
	return (
		<div className="flex flex-row rounded my-5 mx-5 px-2">
			<div className=" flex flex-col m-auto flex  ">
				<div className="px-8 py-10 flex flex-col gap-5">
					<span className="text-2xl font-bold text-center">
						Hello World, I am
					</span>
					<h1 className="text-7xl font-extrabold text-center">Seema Tamang</h1>
					<h2 className="font-semibold text-xl text-center">
						Software Engineer
					</h2>
					<div className="flex flex-row gap-2 items-center justify-center">
						<Image
							alt="image"
							src={!darkMode ? "/location.png" : "/locationw.png"}
							width={20}
							height={20}
						/>
						<h2>Kathmandu, Nepal</h2>
					</div>
					{/* <Icon/> */}
					<button className="bg-[#2dcb73] flex items-center m-auto gap-1 justify-center rounded w-24 text-slate-50 w-28 h-10 ">
						<svg
							className="w-5 h-5 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
							/>
						</svg>
						<span
							className="text-white "
							onClick={() =>
								forwardLink(
									"https://www.linkedin.com/in/seema-tamang-660694137"
								)
							}
						>
							Connect
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
