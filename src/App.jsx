/* REACT */
import { useEffect } from "react";
/* COMPONENTS */
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
/* REDUX */
import { useSelector } from "react-redux";

function App() {
    /* REDUX STATE */
    const data = useSelector((state) => state.pokemonList);

    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <div className="app-container">
            <Navigation />
            <Dashboard />
            <Navigation bottom />
        </div>
    );
}

export default App;
