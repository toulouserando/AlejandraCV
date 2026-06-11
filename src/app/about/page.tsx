import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Globe, Star } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function AboutPage() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic')

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-6">
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-accent">
              À propos d'Alejandra
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bienvenue sur la présentation officielle du CV d'Alejandra Erazo Moreno, un parcours polyvalent dédié à l'éducation, l'éveil, l'organisation et le service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Sidebar with Image */}
            <div className="md:col-span-1 space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl border-4 border-white">
<Image
  src="/data/images/photo_aiguille.jpg"
  alt="Alejandra Erazo Moreno"
  width={800}
  height={800}
  className="object-cover"
/>
              </div>
              <div className="bg-primary/5 p-6 rounded-2xl space-y-4 border border-primary/10">
                <h3 className="font-bold text-lg text-primary">Identité</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Nom:</span>
                    <span className="font-medium text-accent">Erazo Moreno</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Prénom:</span>
                    <span className="font-medium text-accent">Alejandra</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Ville:</span>
                    <span className="font-medium text-accent">Toulouse, FR</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div className="prose prose-neutral dark:prose-invert">
                <h2 className="font-headline text-3xl font-bold mb-4">Une Passion pour la Transmission</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ce site est bien plus qu'une simple liste d'expériences ; il s'agit d'une immersion dans mon univers professionnel. 
                  D'origine colombienne et installée à Toulouse, j'ai bâti mon parcours sur la conviction que l'apprentissage, 
                  l'accompagnement et l'écoute sont les clés du développement humain et relationnel.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-3">Ma Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Que ce soit pour enseigner une langue vivante, veiller à l'épanouissement des tout-petits en crèche, 
                  ou gérer les exigences du commerce de détail, ma démarche reste la même : bienveillance, rigueur et adaptation.
                  Mon expérience internationale m'a dotée d'une flexibilité unique et me permet aujourd'hui d'évoluer avec aisance en français, en anglais et en espagnol.
                  Mon parcours s'enrichit de 5 années d'expérience dans le secteur de la vente et du prêt-à-porter (Kenzo Jeans). 
                  Cette facette de mon parcours m'a dotée d'une solide expertise en gestion d'espace (création visuelle, organisation), en logistique (stocks, inventaires)
                  et d'un sens aigu de la relation client et de l'accueil.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <Card className="border-none bg-secondary/20 shadow-none">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-2 text-primary">
                        <Globe className="w-5 h-5" />
                        <span className="font-bold">Multiculturelle</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Expériences riches et variées en Colombie, aux États-Unis et en France.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none bg-secondary/20 shadow-none">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-2 text-primary">
                        <BookOpen className="w-5 h-5" />
                        <span className="font-bold">Académique</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Recherche publiée et Master 2 en cours.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-accent text-accent-foreground p-8 rounded-3xl space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-primary fill-primary" />
                  <h3 className="font-headline text-2xl font-bold italic">Le mot d'Alejandra</h3>
                </div>
                <p className="text-accent-foreground/80 leading-relaxed">
                  "Chaque étape de ma carrière, de la vente au commerce de détail jusqu'à la direction de classe, 
                  m'a appris une valeur essentielle : l'écoute. Aujourd'hui, je mets cette écoute au service des familles 
                  et des institutions éducatives pour construire ensemble un environnement stimulant et sécurisant."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
