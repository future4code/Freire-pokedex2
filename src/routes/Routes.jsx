import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage.jsx'
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import DetailPage from "../pages/DetailPage/DetailPage.jsx"
import PokedexPage from "../pages/PokedexPage/PokedexPage.jsx";

export const Router = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>} />
            <Route path= "*" element = {<ErrorPage/>} />
            <Route path= "DetailPage" element = {<DetailPage/>} />
            <Route path= "PokedexPage" element = {<PokedexPage/>} />
        </Routes>
      </BrowserRouter>

    )
}