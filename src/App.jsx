import { CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import Concept from "./components/Concept/Concept";
import Tab from "./components/Tab/Tab";
import { useState } from "react";

function App() {
	// let tabsContent = "Choose tab...";
	let [tabsContent, setTabsContent] = useState(null);

	function handleClick(tab) {
		// tabsContent = tab;
		console.log(tab, " was clicked!");
		setTabsContent(tab);
	}

	return (
		<div>
			<Header />
			<main>
				<h2>Some text in main section</h2>
				<section id="core-concepts">
					<ul>
						{CONCEPTS.map((concept, index) => (
							<Concept
								key={concept.title}
								{...concept}
							/>
						))}

						{/* <Concept
							img="src/assets/components.png"
							title="Components"
							desc="Some desc about components"
						/>
						<Concept
							img={CONCEPTS[1].img}
							title={CONCEPTS[1].title}
							desc={CONCEPTS[1].desc}
						/>
						<Concept {...CONCEPTS[2]} />
						<Concept {...CONCEPTS[3]} /> */}
					</ul>
				</section>
				<section id="examples">
					<menu>
						<ul>
							<Tab
								isSelected={tabsContent === "Components"}
								onSelect={() => handleClick("Components")}
							>
								Components
							</Tab>
							<Tab
								isSelected={tabsContent === "JSX"}
								onSelect={() => handleClick("JSX")}
							>
								JSX
							</Tab>
							<Tab
								isSelected={tabsContent === "Props"}
								onSelect={() => handleClick("Props")}
							>
								Props
							</Tab>
							<Tab
								isSelected={tabsContent === "State"}
								onSelect={() => handleClick("State")}
							>
								State
							</Tab>
						</ul>
					</menu>
					{tabsContent && <h3>{tabsContent}</h3>}
				</section>
			</main>
		</div>
	);
}

export default App;
