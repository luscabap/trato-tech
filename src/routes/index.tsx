import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPrincipal from "../pages/Principal";
import { Home } from "../pages/Home";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPrincipal />}>
                    <Route index element={<Home />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}