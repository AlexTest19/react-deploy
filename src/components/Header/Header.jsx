import "./Header.css";

let headerImg = "src/assets/react-icon.png";
let subTitlesArr = ["Fundamentals", "Core", "Concepts"];

function getRandomNumber() {
	return Math.floor(Math.random() * 3);
}

export default function Header() {
	return (
		<header>
			<img
				src={headerImg}
				alt="Stylized atom"
			/>
			<h1>React Start</h1>
			<p>Lets start studying {subTitlesArr[getRandomNumber()]} React library today!</p>
		</header>
	);
}
