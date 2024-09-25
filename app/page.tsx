import {Appbar} from "@/components/Appbar"
import {Hero} from "@/components/Hero"
import {About} from "@/components/About"
import { Footer} from "@/components/Footer"
import { Skills } from "@/components/Skills"
import Service from "@/components/Services"
export default function Home() {
  return (
   <div className="text-white min-h-screen bg-black">
      <Appbar/>

      <main>
        <Hero/>
        <About/>

        <Skills/>
        <Service/>

      </main>

      <Footer/>
   </div>
  );
}
