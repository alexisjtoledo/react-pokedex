/* REACT */
import { useEffect } from "react";
/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./redux/index";
/* COMPONENTS */
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";

function App() {
    /* REDUX ACTIONS */
    const dispatch = useDispatch();
    const { updateDevice } = bindActionCreators(actionCreators, dispatch);

    /* REDUX STATE */
    const isMobile = useSelector((state) => state.pokemonList.isMobile);

    /**
     * Checks the type of device or if the orientation changes.
     */
    const getDevice = () => {
        if (window.innerWidth < window.innerHeight) {
            updateDevice(true);
        }
        if (window.innerWidth > window.innerHeight) {
            updateDevice(false);
        }
    };

    useEffect(() => {
        getDevice();
        window.addEventListener("resize", getDevice);
        return () => window.removeEventListener("resize", getDevice);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="app-container">
            {!isMobile ? <Navigation /> : null}
            <Dashboard />
            {!isMobile ? <Navigation bottom /> : <Navigation />}
        </div>
    );
}

export default App;
