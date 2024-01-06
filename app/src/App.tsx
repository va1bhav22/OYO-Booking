import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { newNavMenues } from "./hooks/Navmenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {newNavMenues?.map((menu) => (
            <Route key={menu.id} path={menu.path} element={menu.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
