import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { newNavMenues } from "./hooks/Navmenu";
import ErrorBoundary from "./hooks/ErrorBoundary";
function App() {
  return (
    <ErrorBoundary>
      <>
        <BrowserRouter>
          <Routes>
            {newNavMenues?.map((menu) => (
              <Route key={menu.id} path={menu.path} element={menu.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </>
    </ErrorBoundary>
  );
}

export default App;
