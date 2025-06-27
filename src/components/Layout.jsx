import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="h-screen pt-16 pl-16">
      <div className="bg-white rounded-tl-2xl rounded-bl-2xl flex flex-col p-12 shadow-2xl shadow-black/40">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
