import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ListPanelRoutes } from "./routes/PanelRoutes";
import { ListRoutes } from "./routes/routes-elements";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            {ListRoutes.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
          </>
          <>
            {ListPanelRoutes.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
