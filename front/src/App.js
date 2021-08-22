import Search from "./Components/Search/Search";
import PersonneList from "./Components/PersonneList/PersonneList";
import { useEffect, useState } from "react";

function App() {
	const [searchTitle, setSearchTitle] = useState("");
	const getSearchTitle = (input) => {
		setSearchTitle(input);
	};

	return (
		<div className='App'>
			<Search
				
				getSearchTitle={getSearchTitle}
			/>
			<PersonneList searchTitle={searchTitle} />
		</div>
	);
}

export default App;
