// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="app-shell plus-jakarta-sans-jakartaPlus bg-[#FCFCFC]">
      <Header />
      <main className="app-content">
        <Outlet /> {/* child pages render here */}
      </main>
      <Footer />
    </div>
  );
}
