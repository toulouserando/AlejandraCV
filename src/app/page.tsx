import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { ExperienceSwitcher } from "@/components/sections/ExperienceSwitcher"
import { EducationTimeline } from "@/components/sections/EducationTimeline"
import { QualityMatrix } from "@/components/sections/QualityMatrix"
import { ResearchHub } from "@/components/sections/ResearchHub"
import { AISyncTool } from "@/components/sections/AISyncTool"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ExperienceSwitcher />
      <EducationTimeline />
      <QualityMatrix />
      <ResearchHub />
      <AISyncTool />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  )
}