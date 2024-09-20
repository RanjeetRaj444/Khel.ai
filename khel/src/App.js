import "./App.css";
import Footter from "./components/Footter";
import Navbar from "./components/Navbar";
import Mainroutes from "./MainRoutes/Mainroutes";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Mainroutes />
			<Footter />
		</div>
	);
}

export default App;
