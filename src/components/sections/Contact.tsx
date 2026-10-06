"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation, Linkedin, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        toast({
          title: "Message envoyé !",
          description: "Je vous répondrai dans les plus brefs délais.",
        })
        e.currentTarget.reset()
      } else {
        throw new Error("Erreur lors de l'envoi")
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-headline text-4xl font-bold">Contactez-moi</h2>
          <p className="text-accent-foreground/70 text-lg leading-relaxed max-w-md">
            Un projet pédagogique ? Une mission de garde ou d'animation ? 
            Ou simplement besoin de plus d'informations ? N'hésitez pas à m'écrire.
          </p>

          <div className="space-y-6">
            {/* Remplacement de l'email par le quartier / secteur */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm text-accent-foreground/50 font-bold uppercase tracking-wider">Secteur / Quartier</span>
                <span className="font-medium">Toulouse Centre & agglomération</span>
              </div>
            </div>
            
            {/* LinkedIn */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm text-accent-foreground/50 font-bold uppercase tracking-wider">LinkedIn</span>
                <a 
                  href="https://www.linkedin.com/in/alejandra-erazo-b354251b0/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium hover:underline"
                >
                  linkedin.com/in/alejandra-erazo
                </a>
              </div>
            </div>

            {/* Localisation */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm text-accent-foreground/50 font-bold uppercase tracking-wider">Localisation</span>
                <span className="font-medium">Toulouse, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium opacity-80">Nom</label>
                <Input name="name" required className="bg-white/10 border-white/10 focus:ring-primary text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium opacity-80">Email</label>
                <Input name="email" type="email" required className="bg-white/10 border-white/10 focus:ring-primary text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium opacity-80">Objet</label>
              <Input name="subject" required className="bg-white/10 border-white/10 focus:ring-primary text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium opacity-80">Message</label>
              <Textarea name="message" required className="bg-white/10 border-white/10 focus:ring-primary text-white min-h-[120px]" />
            </div>
            <Button type="submit" disabled={loading} className="w-full py-6 rounded-full font-bold text-lg gap-2">
              {loading ? "Envoi..." : <><Send className="w-4 h-4" /> Envoyer mon message</>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
