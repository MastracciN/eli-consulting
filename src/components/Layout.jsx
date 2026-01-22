import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="p-4 md:p-0">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}