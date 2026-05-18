import { EDUCATION } from "@/lib/cv-data"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function EducationTimeline() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">Socle Académique</h2>
          <p className="text-muted-foreground italic">"L'éducation est la base de toute pédagogie bienveillante."</p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {EDUCATION.map((edu, index) => (
            <div key={edu.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border bg-card shadow-sm transition-all duration-300 group-hover:shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-accent">{edu.period}</div>
                </div>
                <div className="text-foreground font-headline text-lg font-bold mb-1">{edu.title}</div>
                <div className="text-sm text-muted-foreground">{edu.institution}</div>
                <div className="text-xs text-primary font-medium mt-1 uppercase tracking-tight">{edu.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}