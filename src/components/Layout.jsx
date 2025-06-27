import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="p-24 h-dvh">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
