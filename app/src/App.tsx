import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { newNavMenues } from "./hooks/Navmenu";
import ErrorBoundary from "./hooks/ErrorBoundary";
import { Provider } from "react-redux";
import { lazy } from "react";
import store from "./Redux/store";
import Detail from "./pages/detail";
import Login from "./pages/login";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const IndexPage = lazy(() => import("./pages"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10,
      refetchOnWindowFocus: false,
    },
  },
});
function App() {
  return (
    <ErrorBoundary>
      <>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/:id" element={<Detail />} />
                <Route path="/login" element={<Login />} />
                {newNavMenues?.map((menu) => (
                  <Route
                    key={menu.id}
                    path={menu.path}
                    element={menu.element}
                  />
                ))}
              </Routes>
            </BrowserRouter>
          </Provider>
        </QueryClientProvider>
      </>
    </ErrorBoundary>
  );
}

export default App;
