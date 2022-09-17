import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
    return (
        <BrowserRouter>
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
        </BrowserRouter>
    );
}
export default Main;