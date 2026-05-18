import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Share2 } from "lucide-react"

export function ResearchHub() {
  return (
    <section id="research" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-headline text-4xl font-bold">Recherche & Publications</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mon parcours académique s'est enrichi d'une dimension analytique forte. 
              Ma thèse sur l'impact de la littérature jeunesse dans l'apprentissage oral témoigne de ma volonté d'innover en pédagogie.
            </p>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-none bg-secondary/30 p-8 rounded-3xl overflow-hidden relative group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full group-hover:scale-110 transition-transform duration-700" />
              <div className="space-y-6 relative z-10">
                <div className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold">Publication Scientifique (2014)</div>
                <h3 className="font-headline text-2xl font-bold leading-tight">
                  Incidencia de la lectura de <span className="italic">"The cat in the hat"</span> del Dr. Seuss en la producción oral de lengua inglesa
                </h3>
                <p className="text-foreground/80 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                  Analyse menée au sein du Colegio República de Colombia sur l'impact de la narration et du rythme dans l'acquisition orale d'une langue étrangère pour de jeunes apprenants.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-white shadow-sm"><FileText className="w-4 h-4 text-primary" /></div>
                    <div className="text-sm">
                      <span className="block font-bold">Méthodologie</span>
                      <span className="text-muted-foreground">Recherche-action, observations directes.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-white shadow-sm"><Share2 className="w-4 h-4 text-primary" /></div>
                    <div className="text-sm">
                      <span className="block font-bold">Communication</span>
                      <span className="text-muted-foreground">Présentée en colloque universitaire.</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}