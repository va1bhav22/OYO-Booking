import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { newNavMenues } from "./hooks/Navmenu";
import ErrorBoundary from "./hooks/ErrorBoundary";
import { Provider } from "react-redux";
import { lazy } from "react";
import store from "./Redux/store";
import Detail from "./pages/detail";
const IndexPage = lazy(() => import("./pages"));

function App() {
  return (
    <ErrorBoundary>
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/:id" element={<Detail />} />
              {newNavMenues?.map((menu) => (
                <Route key={menu.id} path={menu.path} element={menu.element} />
              ))}
            </Routes>
          </BrowserRouter>
        </Provider>
      </>
    </ErrorBoundary>
  );
}

export default App;
