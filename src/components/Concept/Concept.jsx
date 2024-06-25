import "./Concept.css";

export default function Concept({ img, title, desc }) {
	return (
		<li>
			<img
				src={img}
				alt="alt text"
			/>
			<h3>{title}</h3>
			<p>{desc}</p>
		</li>
	);
}
