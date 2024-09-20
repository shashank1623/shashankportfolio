import {Appbar} from "@/components/Appbar"
import {Hero} from "@/components/Hero"
import {About} from "@/components/About"
import { Footer} from "@/components/Footer"
export default function Home() {
  return (
   <div className="text-white min-h-screen bg-black">
      <Appbar/>

      <main>
        <Hero/>
        <About/>
      </main>

      <Footer/>
   </div>
  );
}
