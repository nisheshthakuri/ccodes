import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Navbar({
	darkMode,
	setDarkMode,
	scrollToSkills,
	scrollToProjects,
	scrollToContact,
}) {
	const [modeChangeDiv, setModeChangeDiv] = useState(false);

	const [menuPopUp, setMenuPopUp] = useState(false);
	const divRef = useRef(null);
	const menuPopRef = useRef(null);

	const router = useRouter();

	const forwardLink = (href) => {
		router.push(href);
	};

	const changeDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const changeMenu = () => {
		setMenuPopUp(true);
	};

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (divRef.current && !divRef.current.contains(event.target)) {
				setModeChangeDiv(false);
				setMenuPopUp(false);
			}
			if (menuPopRef.current && !menuPopRef.current.contains(event.target)) {
				setMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	return (
		<>
			<div className=" relative shadow-lg flex h-16 justify-between items-center px-5">
				<div className="sm:hidden ">
					<button
						onClick={toggleMenu}
						className="text-base text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
					>
						<Image alt="iamge" src="/more.png" width={18} height={18}></Image>
					</button>
				</div>
				<div className="px-10 flex justify-start flex-row items-center">
					<h1 className="text-base">My Portfolio</h1>
				</div>

				{menuOpen && (
					<div
						ref={menuPopRef}
						className="sm:hidden absolute top-0 right-0 bg-white w-full mt-16  py-2 px-4 shadow-lg"
					>
						<ul className="list-none space-y-2">
							<li className="text-base">
								<button onClick={scrollToSkills}>Skills</button>
							</li>
							<li className="text-base">
								<button onClick={scrollToProjects}>Projects</button>
							</li>
							<li className="text-base">
								<button onClick={scrollToContact}>Contact</button>
							</li>
						</ul>
					</div>
				)}
				<div
					className={`hidden sm:flex space-x-4 ${
						menuOpen ? "block" : "hidden"
					}`}
				>
					<ul className="list-none flex justify-center">
						<li className="inline mr-20 text-base">
							{" "}
							<button onClick={scrollToSkills}>Skills</button>
						</li>
						<li className="inline mr-20 text-base">
							<button onClick={scrollToProjects}>Projects</button>
						</li>
						<li className="text-base">
							<button onClick={scrollToContact}>Contact</button>
						</li>
					</ul>
				</div>
				<div className="flex justify-end gap-10">
					<div className="relative">
						<Image
							alt="iamge"
							src={!darkMode ? "/menu.png" : "/menuW.png"}
							width={28}
							height={28}
							className="cursor-pointer"
							onClick={changeMenu}
						></Image>
						{menuPopUp && (
							<div
								ref={divRef}
								className="absolute top-19 mt-5 right-0 bg-white shadow-lg w-max px-2 py-2 flex "
							>
								<div
									className=" flex flex-col justify-center items-center cursor-pointer hover:bg-slate-50 px-7 py-4"
									onClick={() => forwardLink("https://github.com/Seema640")}
								>
									<Image src="/github.png" alt="Sunny" width={20} height={20} />
									<h2 class="text-base">Github</h2>
								</div>
								<div
									className=" flex flex-col justify-center items-center cursor-pointer hover:bg-slate-50 px-7 py-4"
									onClick={() =>
										forwardLink(
											"https://www.linkedin.com/in/seema-tamang-660694137"
										)
									}
								>
									<Image
										src="/linkedin.png"
										alt="Sunny"
										width={20}
										height={20}
									/>
									<h2 class="text-base">Linkedin</h2>
								</div>
								<div
									className=" flex flex-col justify-center items-center cursor-pointer hover:bg-slate-50 px-7 py-4"
									onClick={() => forwardLink("https://github.com/Seema640")}
								>
									<Image src="/slack.png" alt="Sunny" width={20} height={20} />
									<h2 class="text-base">Slack</h2>
								</div>
							</div>
						)}
					</div>

					<div className="relative">
						<Image
							alt="iamge"
							src={!darkMode ? "/moon.png" : "/sunnyy.png"}
							width={28}
							height={28}
							onClick={changeDarkMode}
							className="cursor-pointer"
						></Image>
					</div>
				</div>
			</div>
		</>
	);
}
