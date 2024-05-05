import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Partners from "./pages/Partners";
import Services from "./pages/Services";
import Fleets from "./pages/Fleets";
// import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "partners",
        element: <Partners />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "fleets",
        element: <Fleets />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
