import { MATRIX_DATA } from "@/lib/cv-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function QualityMatrix() {
  const mainSkills = [
    "Autonome", "Patiente", "Communicative", "Réactive", 
    "Observatrice", "Bienveillante", "Accueillante", "Sociable"
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="font-headline text-4xl font-bold">Qualités & Soft Skills</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mon profil se définit par une large palette de compétences humaines développées au fil de mes expériences internationales.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {mainSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-3 p-4 rounded-lg bg-background border shadow-sm hover:translate-x-1 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
                <Link href="/personality" className="flex items-center gap-2">
                  Voir toutes mes qualités <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-primary/10 relative">
              <div className="absolute top-4 right-8 opacity-10">
                <AlertCircle className="w-24 h-24 text-accent rotate-12" />
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6 text-accent">L'Art du Rebond</h3>
              <p className="text-muted-foreground mb-8 text-sm uppercase tracking-widest font-bold">Auto-évaluation & Maturité Professionnelle</p>
              
              <div className="space-y-6">
                {MATRIX_DATA.slice(0, 3).map((item) => (
                  <div key={item.flaw} className="group p-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <span className="text-sm line-through text-muted-foreground/60 font-medium">{item.flaw}</span>
                      <span className="text-primary font-bold text-lg md:text-xl font-headline flex items-center gap-2">
                         → {item.asset}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed italic">
                      "{item.description}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
