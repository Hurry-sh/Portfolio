import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualifications from "./components/qualification/Qualification";
import Footer from "./components/footer/Footer";
import Work from "./components/work/Work";

const App = () => {
    return (
        <>
        <Header />

        <main className="main">
            <Home />
            <About />
            <Skills />
            <Qualifications />
            <Work />
            <Footer />
        </main>
        </>
    )
}

export default App