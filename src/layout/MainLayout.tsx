// import React, { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";



interface MainLayoutProps {
    children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div>

            <div className="pagebody">
                <Navbar />
                <Header />
                <div>{children}</div>
                <Footer />
            </div>

        </div>
    );
}

export default MainLayout;