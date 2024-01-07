import HeroSection from "./Homepage Components/HeroSection"
import LandScape from "./Homepage Components/LandScape"


export default function HomePage() {

  

  return (
      <div className="z-0 overflow-hidden">
          <div className="snap-y overflow-x-hidden snap-mandatory overflow-y-scroll h-screen">

              <HeroSection />

              <LandScape />

              <section className="h-screen flex bg-pastelPurple snap-start">
                  <h1>Third Page</h1>
              </section>

              <section className="h-screen flex bg-pastelYellow snap-start">
                  <h1>Fourth Page</h1>
              </section>


          </div>
      </div>
  )
}