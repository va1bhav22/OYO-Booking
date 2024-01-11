import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { newNavMenues } from "./hooks/Navmenu";
import ErrorBoundary from "./hooks/ErrorBoundary";
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  return (
    <ErrorBoundary>
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
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
