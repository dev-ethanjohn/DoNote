import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import DetailNote from "./pages/DetailNote";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="notes/:id" element={<DetailNote />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
