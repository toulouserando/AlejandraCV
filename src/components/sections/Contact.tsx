"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Message envoyé !",
        description: "Je vous répondrai dans les plus brefs délais.",
      })
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
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
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm text-accent-foreground/50 font-bold uppercase tracking-wider">Email</span>
                <span className="font-medium">contact@alejandra-cv.fr</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm text-accent-foreground/50 font-bold uppercase tracking-wider">LinkedIn</span>
                <span className="font-medium">linkedin.com/in/alejandra-erazo</span>
              </div>
            </div>

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
                <Input required className="bg-white/10 border-white/10 focus:ring-primary text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium opacity-80">Email</label>
                <Input required type="email" className="bg-white/10 border-white/10 focus:ring-primary text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium opacity-80">Objet</label>
              <Input required className="bg-white/10 border-white/10 focus:ring-primary text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium opacity-80">Message</label>
              <Textarea required className="bg-white/10 border-white/10 focus:ring-primary text-white min-h-[120px]" />
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