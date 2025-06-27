import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="h-screen pt-24 pl-24">
      <div className="bg-white rounded-tl-3xl rounded-bl-2xl flex flex-col p-18 shadow-2xl shadow-black/40">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
