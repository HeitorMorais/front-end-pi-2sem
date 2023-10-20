import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Login } from "./Login.jsx";
import { Teste } from "./Teste.jsx";
import { Registro } from "./Registro.jsx";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/teste" element={<Teste />}/>
                <Route path="/registro" element={<Registro />}/>
            </Routes>
        </Router>
    )
}