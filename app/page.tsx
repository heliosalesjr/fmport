import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <>
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={ [
        { name: "Home", link: "#", icon: <FaHome /> },
        { name: "About", link: "#about", icon: <FaUser /> },
        { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
        { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
      ]} />
       <Hero />
       <Grid />
      </div>
    </main>
    
    </>
  );
}
