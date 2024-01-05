import MyPage from "../pages/MyPage";
import Product from "../pages/Product";
export const ListRoutes = [
  {
    id: 1,
    path: "/",
    element: <Product />,
    title: "Product",
  },
  {
    id: 2,
    path: "/my-page",
    element: <MyPage />,
    title: "MyPage",
  },
];
