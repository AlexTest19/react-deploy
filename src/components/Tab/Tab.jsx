import "./Tab.css";

export default function Tab({ children, onSelect, isSelected }) {
	return (
		<li>
			<button
				className={isSelected && "active"}
				onClick={onSelect}
			>
				{children}
			</button>
		</li>
	);
}
