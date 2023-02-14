// Dependencies
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Loader from "./components/Loader";

// Pages
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { HideLoading, SetPortfolioData, ShowLoading, ReloadData } from "./redux/rootSlice";
import Login from "./pages/Admin/Login";

function App() {
    // const [ showLoading, setShowLoading ] = useState( false );
    const { loading, portfolioData, reloadData } = useSelector((state) => state.root);
    const dispatch = useDispatch();
    const getPortfolioData = async () => {
        try {
            dispatch(ShowLoading());
            const response = await axios.get(
                "/api/portfolio/get-portfolio-data",
            );
            // console.log( response.data );
            dispatch( SetPortfolioData( response.data ) );
            
            // Set reloadData flag false.
            dispatch( ReloadData( false ) );

            dispatch(HideLoading());
        } catch ( error )
        {
            dispatch(HideLoading());
        }
    };
    // Database API Call
    useEffect(() => {
        if ( !portfolioData )
        {
            getPortfolioData();
        }
    } );
    
    useEffect( () =>
    {
        if ( reloadData ) { getPortfolioData(); }
    }, [ reloadData ] );

    // // Crosscheck data. This triggers whenever portfolioData changes.
    // useEffect(() => {
    //     // console.log(portfolioData);
    // }, [portfolioData]);

    return (
        <BrowserRouter>
            {" "}
            {loading ? <Loader> </Loader> : null}{" "}
            <Routes>
                <Route path="/" element={<Home />} />{" "}
                <Route path="/admin" element={ <Admin /> } />{ " " }
                <Route path="/admin-login" element={<Login />} />
            </Routes>{" "}
        </BrowserRouter>
    );
}

export default App;
