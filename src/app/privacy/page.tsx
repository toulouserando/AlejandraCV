import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent">
              Politique de Confidentialité
            </h1>
            <p className="text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <Card className="border-none shadow-md bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Shield className="w-6 h-6" /> Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p>
                  Le respect de votre vie privée est une priorité pour Alejandra Erazo Moreno. 
                  Cette politique de confidentialité a pour but de vous informer sur la manière dont nous collectons, 
                  utilisons et protégeons vos informations personnelles lors de votre visite sur <strong>Alejandra CV</strong>.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lock className="w-5 h-5 text-accent" /> Collecte des données
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  <p className="mb-2">Nous collectons des informations lorsque :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Vous utilisez le formulaire de contact (Nom, Email, Message).</li>
                    <li>Vous utilisez le Synchroniseur de Carrière (Description de poste fournie).</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="w-5 h-5 text-accent" /> Utilisation des données
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Les données du formulaire de contact servent uniquement à vous répondre. 
                    Les descriptions de poste envoyées au synchroniseur sont traitées par 
                    l'intelligence artificielle (Genkit/Google AI) pour générer l'analyse de profil 
                    et ne sont pas stockées de manière partenaire sur nos serveurs.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <FileText className="w-6 h-6" /> Vos droits
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p>
                  Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <ul className="space-y-2">
                  <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données.</li>
                  <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes.</li>
                  <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données de nos fichiers de contact.</li>
                </ul>
                <p className="mt-6">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : 
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
