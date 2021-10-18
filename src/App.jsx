/* REACT */
import { useEffect } from "react";
/* COMPONENTS */
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div className="app-container">
            <Navigation />
            <Dashboard />
            <Navigation bottom />
        </div>
    );
}

export default App;
