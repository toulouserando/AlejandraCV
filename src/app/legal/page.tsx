import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Info, Globe, Mail } from "lucide-react"

export default function LegalPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent">
              Mentions Légales
            </h1>
            <p className="text-muted-foreground">
              En vigueur au {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Info className="w-6 h-6" /> Éditeur du site
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p>
                  Le site <strong>Alejandra CV</strong> est édité par :
                </p>
                <ul className="list-none pl-0 space-y-1">
                  <li><strong>Nom :</strong> Alejandra Erazo Moreno</li>
                  <li><strong>Statut :</strong> Particulier (Portfolio Professionnel)</li>
                  <li><strong>Localisation :</strong> Toulouse, France</li>
                  <li><strong>Contact :</strong> contact@alejandra-cv.fr</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Globe className="w-6 h-6" /> Hébergement
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p>
                  Le site est hébergé par <strong>Firebase Hosting</strong>, un service de Google Cloud :
                </p>
                <ul className="list-none pl-0 space-y-1">
                  <li><strong>Société :</strong> Google Ireland Limited</li>
                  <li><strong>Adresse :</strong> Gordon House, Barrow Street, Dublin 4, Irlande</li>
                  <li><strong>Site Web :</strong> <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer">firebase.google.com</a></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Scale className="w-6 h-6" /> Propriété Intellectuelle
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p>
                  L'ensemble du contenu de ce site (textes, design, logos, et l'illustration aquarelle originale) est la propriété exclusive de Alejandra Erazo Moreno, sauf mention contraire.
                </p>
                <p>
                  Toute reproduction, distribution ou modification, même partielle, est interdite sans l'accord préalable écrit de l'auteure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Mail className="w-6 h-6" /> Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p>
                  Pour toute question concernant le site ou son contenu, vous pouvez envoyer un courriel à l'adresse suivante : 
                  <span className="font-bold text-accent"> contact@alejandra-cv.fr</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
