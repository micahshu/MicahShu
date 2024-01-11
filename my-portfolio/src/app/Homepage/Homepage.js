import HeroSection from "./Homepage Sections/HeroSection"
import LandScape from "./Homepage Sections/LandScape"
import ProjectsPage from "./Homepage Sections/ProjectsPage"
import PersonalProject from "./Homepage Sections/PersonalProjects"
import ContactMe from "./Homepage Sections/ContactMe"

export default function HomePage() {

  

  return (
      <div className="z-0 overflow-hidden">
          <div className="snap-y overflow-x-hidden snap-mandatory overflow-y-scroll h-screen">

              <HeroSection />

              <LandScape />

              <ProjectsPage />

              <ContactMe />


          </div>
      </div>
  )
}