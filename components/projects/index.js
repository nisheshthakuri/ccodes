import styles from "./Gallery.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Projects({ projectSectionRef }) {
	const photos = [
		// Your array of photo URLs
		"/nemo.png",
		"/nemo1.png",
		"/laxmi.png",
		"/nemo.png",
		"/nemo1.png",
		"/laxmi.png",
		"/nemo.png",
		"/nemo1.png",
		"/laxmi.png",
	];
	const options = {
		series: [76, 67, 61, 90],
		chart: {
			height: 390,
			type: "radialBar",
		},
		plotOptions: {
			radialBar: {
				dataLabels: {
					name: {
						fontSize: "16px",
					},
					value: {
						fontSize: "16px",
						color: "#fff",
					},
					total: {
						show: true,
						label: "Total",
						color: "#fff",
						formatter: function (w) {
							return "294";
						},
					},
				},
			},
		},

		labels: ["NodeJS", "Wordpress", "UI/UX", "ReactJS"],
		// Rest of the options...

		responsive: [
			{
				breakpoint: 480,
				options: {
					legend: {
						show: false,
					},
				},
			},
		],
	};

	return (
		<section
			id="projects"
			ref={projectSectionRef}
			className=" bg-[#0F2139] rounded-lg p-4 m-1 md:m-1 lg:m-11 xl:m-11"
		>
			<div className="flex mt-3 flex-col md:flex-col lg:flex-row xl:flex-row">
				<div className="w-full md:w-full  lg:w-6/12 xl:w-6/12 bg-[#1B2C42] p-0 md:p-7 lg:p-7 xl:p-7 flex-col gap-5">
					<div className="flex divide-x divide-none md:divide-dashed lg:divide-dashed xl:lg:divide-dashed">
						<div className="flex gap-2 w-4/12 p-2">
							<Image
								alt="iamge"
								src="/company.png"
								width={50}
								height={50}
							></Image>
							<div className="flex-col">
								<p className="text-[#FEFEFE] text-lg font-semibold">02</p>
								<p className="text-[#72808F] text-xs">Company History</p>
							</div>
						</div>
						<div className="flex gap-2 w-4/12 p-2">
							<Image
								alt="iamge"
								src="/workshop.png"
								width={50}
								height={50}
							></Image>
							<div className="flex-col">
								<p className="text-[#FEFEFE] text-lg font-semibold">05 +</p>
								<p className="text-[#72808F] text-xs">Workshop Experience</p>
							</div>
						</div>
						<div className="flex gap-2 w-4/12 p-2">
							<Image
								alt="iamge"
								src="/presentation.png"
								width={50}
								height={50}
							></Image>
							<div className="flex-col">
								<p className="text-[#FEFEFE] text-lg font-semibold">05 +</p>
								<p className="text-[#72808F] text-xs">Projects</p>
							</div>
						</div>
					</div>
					<div className="flex mt-5 divide-x divide-none md:divide-dashed lg:divide-dashed xl:lg:divide-dashed ">
						<div className="flex gap-2 w-5/12 md:w-4/12 lg:w-4/12 xl:w-4/12 p-2 ">
							<Image
								alt="iamge"
								src="/freelancer.png"
								width={50}
								height={50}
							></Image>
							<div className="flex-col">
								<p className="text-[#FEFEFE] text-lg font-semibold">04+</p>
								<p className="text-[#72808F] text-xs">Freelancing</p>
							</div>
						</div>
						<div className="flex gap-2 w-5/12 md:w-4/12 lg:w-4/12 xl:w-4/12 p-2">
							<Image
								alt="iamge"
								src="/calendar.png"
								width={50}
								height={50}
							></Image>
							<div className="flex-col">
								<p className="text-[#FEFEFE] text-lg font-semibold">02+</p>
								<p className="text-[#72808F] text-xs">Experience</p>
							</div>
						</div>
					</div>

					{/* <div class="lg:flex lg:flex-wrap flex flex-row flex-wrap divide-dashed">
 
  <div class="lg:w-1/2 md:w-1/3 w-1/3 p-4 flex flex-row flex-wrap gap-2 ">  
   <Image src='/company.png' width={50} height={50}></Image>
                    <div className="flex-col">
                    <p className="text-[#FEFEFE] text-lg font-semibold">02</p>
                    <p className="text-[#72808F] text-xs">Company History</p>
                    </div>
                    </div>
  <div class="lg:w-1/2 md:w-1/3  w-1/3 p-4 flex flex-row flex-wrap gap-2"><Image src='/workshop.png' width={50} height={50}></Image>
                    <div className="flex-col">
                    <p className="text-[#FEFEFE] text-lg font-semibold">05 +</p>
                    <p className="text-[#72808F] text-xs">Workshop Experience</p>
                    </div></div>
  <div class="lg:w-1/2 md:w-1/3  w-1/3 p-4 flex flex-row flex-wrap gap-2">  <Image src='/presentation.png' width={50} height={50}></Image>
                    <div className="flex-col">
                    <p className="text-[#FEFEFE] text-lg font-semibold">05 +</p>
                    <p className="text-[#72808F] text-xs">Projects</p>
                    </div></div>

  
  <div class="lg:w-1/2 md:w-1/3 p-4  w-1/3 flex flex-row flex-wrap gap-2"> <Image src='/freelancer.png' width={50} height={50}></Image>
                    <div className="flex-col">
                    <p className="text-[#FEFEFE] text-lg font-semibold">04+</p>
                    <p className="text-[#72808F] text-xs">Freelancing</p>
                    </div></div>
  <div class="lg:w-1/2 md:w-1/3 p-4  w-1/3 flex flex-row flex-wrap gap-2"> <Image src='/calendar.png' width={50} height={50}></Image>
                    <div className="flex-col">
                    <p className="text-[#FEFEFE] text-lg font-semibold">02+</p>
                    <p className="text-[#72808F] text-xs">Experience</p>
                    </div></div>
</div>
                     */}
				</div>
				<div className="w-full md:w-full lg:w-6/12 xl:w-6/12 mt-5 md:mt-5 lg:mt-0 xl:mt-0">
					<div className="bg-[#1B2C42] mx-0 md:mx-9 lg:mx-9 xl:mx-9 rounded-3xl p-5">
						<p className="text-[#FFFFFF] text-lg text-center font-bold">
							My Progress
						</p>
						<div className="flex ">
							<div className=" w-6/12 p-5">
								<p className="text-[#FEFEFE] text-lg font-semibold">STACKS</p>
								<div className="flex items-center gap-2">
									<div className=" h-2.5 w-2.5 rounded bg-[#FA5D72] " />
									<p className="text-[#72808F] text-xs">ReactJS</p>
								</div>
								<div className="flex items-center gap-2">
									<div className=" h-2.5 w-2.5 rounded bg-[#3999F6] " />
									<p className="text-[#72808F] text-xs">NodeJS</p>
								</div>
								<div className="flex items-center gap-2">
									<div className=" h-2.5 w-2.5 rounded bg-[#46E1A0] " />
									<p className="text-[#72808F] text-xs">Wordpress</p>
								</div>
								<div className="flex items-center gap-2">
									<div className=" h-2.5 w-2.5 rounded bg-[#F6B341] " />
									<p className="text-[#72808F] text-xs">UI/UX</p>
								</div>
								<div className="ml-4">
									<div className="flex items-center gap-2">
										<div className=" h-1.5 w-1.5 rounded bg-[#F3CC6E] " />
										<p className="text-[#72808F] text-xs">
											Material UI, Tailwind, Bootstrap
										</p>
									</div>
									<div className="flex items-center gap-2">
										<div className=" h-1.5 w-1.5 rounded bg-[#F3CC6E] " />
										<p className="text-[#72808F] text-xs">Figma</p>
									</div>
									<div className="flex items-center gap-2">
										<div className=" h-1.5 w-1.5 rounded bg-[#F3CC6E] " />
										<p className="text-[#72808F] text-xs">Html/css</p>
									</div>
								</div>
							</div>
							<ApexChart
								options={options}
								series={options.series}
								type="radialBar"
								height={215}
							/>
						</div>
					</div>
				</div>
			</div>
			<h1 className="text-[#FEFEFE] mt-4">Project Overview</h1>
			<p className="text-[#72808F] text-xs mb-5">
				Projects that I have explored individually and professionally.
			</p>

			<div className="flex">
				<div>
					<div className={styles["gallery-container"]}>
						<div className={styles["gallery-scroll"]}>
							{photos.map((photo, index) => (
								<Image
									key={index}
									src={photo}
									width={300}
									height={200}
									alt={`Photo ${index + 1}`}
									className={styles["gallery-item"]}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
