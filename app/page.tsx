import {Appbar} from "@/components/Appbar"
import {Hero} from "@/components/Hero"
import {About} from "@/components/About"
import { Footer} from "@/components/Footer"
import { Skills } from "@/components/Skills"
import Service from "@/components/Services"
import SkillsInterface from "@/components/SkillsInterface"
import ProjectCatalog from "@/components/ProjectCatalog"
import BlogPost from "@/components/BlogPost"
import ClientTestimonialsSection from "@/components/ClientTestimonialsSection"
import FooterTop from "@/components/FooterTop"
export default function Home() {
  return (
   <div className="text-white min-h-screen bg-black">
      <Appbar/>

      <main>
        <Hero/>
        <About/>

        <Skills/>
        <Service/>

        <SkillsInterface/>

        <ProjectCatalog/>
        <BlogPost/>

        
        {/* <ClientTestimonialsSection/> */}
        <FooterTop/>
      </main>

      <Footer/>
   </div>
  );
}
