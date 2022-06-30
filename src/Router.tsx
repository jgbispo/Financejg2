import {Route, Routes} from "react-router-dom";
import Finance from "./Pages/Finance";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Finance />}/>
        </Routes>
    )
}