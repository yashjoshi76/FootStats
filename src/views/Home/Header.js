import React from "react";

export default function Header() {
	return (
		<div
			className="p-5 text-center bg-image"
			style={{
				backgroundColor: "black",
				height: "100px",
				width: "100%",
			}}
		>
			<div>
				<div className="d-flex justify-content-center align-items-center h-100">
					<div className="text-white">
						<h1 className="mb-2">FootStats</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
