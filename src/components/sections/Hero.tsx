import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

// On remonte de 3 niveaux pour sortir de src et atteindre la racine du projet
import profilePic from "../../../data/images/Alejandra5.jpg"

export function Hero() {
  const bgPattern = PlaceHolderImages.find(img => img.id === 'bg-pattern')

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Pattern Layer */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none -z-20" 
        style={{ 
          backgroundImage: `url(${bgPattern?.imageUrl})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px'
        }}
      />
      
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-4">
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight">
              Alejandra <br />
              <span className="text-primary">Erazo Moreno</span>
            </h1>
            <p className="font-headline text-2xl text-accent font-medium italic">
              Enseignante de Langues, Accompagnante Éducative Petite Enfance & Professionnelle de la Relation Client
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Passionnée par la transmission et le développement de l'enfant, mon parcours 
            s'articule autour de trois piliers : la pédagogie, l'éveil des plus petits et le sens du service.
            Une approche bienveillante, dynamique et résolument tournée vers l'autre.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full gap-2">
              Voir mon parcours <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2 border-primary text-primary hover:bg-primary/5">
              Télécharger CV <Download className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Langues</span>
              <div className="flex gap-3 text-sm font-semibold mt-1">
                <span>Espagnol (L1)</span>
                <span className="text-border">|</span>
                <span>Français (C2)</span>
                <span className="text-border">|</span>
                <span>Anglais (B2)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/15 rounded-[2rem] rotate-6 -z-10" />
            <div className="absolute inset-0 border-2 border-accent/20 rounded-[2rem] -rotate-3 -z-10" />
            <div className="relative w-full h-full overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
              <Image
                src={profilePic}
                alt="Alejandra Erazo Moreno"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
