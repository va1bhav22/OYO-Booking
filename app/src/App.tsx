import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { newNavMenues } from "./hooks/Navmenu";
import ErrorBoundary from "./hooks/ErrorBoundary";
import { Provider } from "react-redux";
import { lazy } from "react";
import store from "./Redux/store";
import Detail from "./pages/detail";
import Login from "./pages/login";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./pages/product";
import Payment from "./pages/payment";
const IndexPage = lazy(() => import("./pages"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5,
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
                <Route path="/payment" element={<Product />} />
                <Route path="/payment-success" element={<Payment />} />
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
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </>
    </ErrorBoundary>
  );
}

export default App;
