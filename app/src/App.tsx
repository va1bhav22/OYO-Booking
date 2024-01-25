import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { newNavMenues } from "./hooks/Navmenu";
import ErrorBoundary from "./hooks/ErrorBoundary";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { lazy } from "react";
const IndexPage = lazy(() => import("./pages"));

function App() {
  return (
    <ErrorBoundary>
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IndexPage />} />
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
