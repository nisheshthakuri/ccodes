import { useState } from "react";

export default function TabsInfo({ tabs }) {
	const [activeTab, setActiveTab] = useState(tabs[0]);

	return (
		<div>
			<div className="flex px-12 mx-3">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						className={`px-4 py-2 mr-4 rounded ${
							activeTab === tab
								? "bg-blue-500 text-white"
								: "bg-white-200 text-black-700"
						}`}
						onClick={() => setActiveTab(tab)}
					>
						{tab.title}
					</button>
				))}
			</div>
			<div className="bg-white p-4">{activeTab.content}</div>
		</div>
	);
}
