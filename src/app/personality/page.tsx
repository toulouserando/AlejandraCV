import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { QUALITIES, MATRIX_DATA } from "@/lib/cv-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles, Brain, Target, Compass, AlertCircle } from "lucide-react"

export default function PersonalityPage() {
  const flaws = ["Impatience", "Trop critique", "Sensible", "Exigeante", "Peur de l'échec"]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-accent">
              Personnalité & Soft Skills
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Au-delà des diplômes, c'est l'humain qui définit la qualité de l'accompagnement. 
              Découvrez les facettes qui font ma force au quotidien.
            </p>
          </div>

          {/* Qualities Cloud Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="font-headline text-4xl font-bold">Un Spectre de Qualités</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
              {QUALITIES.map((quality) => (
                <span 
                  key={quality} 
                  className="px-4 py-2 rounded-full bg-white border border-primary/20 text-foreground/80 text-sm md:text-base font-medium shadow-sm hover:bg-primary hover:text-white hover:scale-105 transition-all cursor-default"
                >
                  {quality}
                </span>
              ))}
            </div>
          </div>

          {/* Strengths & Weaknesses Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Brain className="w-8 h-8 text-accent" />
                <h2 className="font-headline text-3xl font-bold">L'Art de se dépasser</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Je crois fermement que nos vulnérabilités peuvent devenir nos plus grands leviers de croissance. 
                Voici comment je transforme mes traits de caractère les plus marqués en atouts professionnels.
              </p>
              
              <div className="space-y-6">
                {MATRIX_DATA.map((item) => (
                  <Card key={item.flaw} className="border-none shadow-md overflow-hidden group">
                    <div className="bg-accent/5 p-6 space-y-4 group-hover:bg-accent/10 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <span className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest line-through">
                          {item.flaw}
                        </span>
                        <div className="flex items-center gap-2 text-primary font-bold text-xl font-headline">
                          <Target className="w-5 h-5" />
                          {item.asset}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-4">
                        "{item.description}"
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Heart className="w-8 h-8 text-primary" />
                  <h2 className="font-headline text-3xl font-bold">Mes Valeurs Clés</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <Card className="border-none bg-primary/5 shadow-none">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-primary">
                        <Compass className="w-5 h-5" /> Bienveillance & Accueil
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Que ce soit envers les élèves, les parents ou les collègues, l'écoute et le respect 
                      de l'autre sont le fondement de toute interaction réussie.
                    </CardContent>
                  </Card>
                  <Card className="border-none bg-primary/5 shadow-none">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-primary">
                        <Target className="w-5 h-5" /> Engagement & Rigueur
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Chaque mission est accomplie avec une exigence de qualité, garantissant sécurité 
                      et excellence pédagogique.
                    </CardContent>
                  </Card>
                  <Card className="border-none bg-primary/5 shadow-none">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-primary">
                        <Sparkles className="w-5 h-5" /> Adaptabilité & Éveil
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Une curiosité naturelle pour les nouvelles méthodes et une capacité à s'ajuster 
                      instantanément aux besoins spécifiques de chaque individu.
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Added Flaws Section at the bottom right */}
              <div className="space-y-8 pt-8 border-t border-dashed border-primary/20">
                <div className="flex items-center gap-4">
                  <AlertCircle className="w-8 h-8 text-accent/60" />
                  <h2 className="font-headline text-3xl font-bold">Mes Défauts</h2>
                </div>
                <Card className="border-none bg-accent/5 shadow-sm">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-6">
                      Reconnaître ses points de vigilance est une preuve de transparence. Ces traits sont le moteur de ma remise en question et de mon perfectionnement.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {flaws.map((flaw) => (
                        <Badge 
                          key={flaw} 
                          variant="outline" 
                          className="border-accent/30 text-accent bg-white/50 px-4 py-2 text-sm font-bold uppercase tracking-tight shadow-sm"
                        >
                          {flaw}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-[10px] text-muted-foreground/60 mt-6 italic">
                      * Traits que je m'efforce de transformer en atouts au quotidien.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
