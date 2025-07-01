import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="h-screen lg:h-full lg:pt-24 lg:pl-24">
      <div className="bg-white w-full min-h-screen lg:min-h-full lg:rounded-tl-3xl lg:rounded-bl-2xl flex flex-col  p-9 lg:p-18  shadow-2xl shadow-black/40">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
