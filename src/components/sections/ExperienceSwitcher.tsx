"use client"

import { useState } from "react"
import { EXPERIENCES, Experience } from "@/lib/cv-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Baby, ShoppingBag, MapPin, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

export function ExperienceSwitcher() {
  const [activeTab, setActiveTab] = useState<Experience['category']>('pedagogy')

  const filtered = EXPERIENCES.filter(e => e.category === activeTab)

  const tabs = [
    { id: 'pedagogy', label: 'Pédagogie', icon: GraduationCap },
    { id: 'childhood', label: 'Petite Enfance', icon: Baby },
    { id: 'commerce', label: 'Commerce & Vente', icon: ShoppingBag },
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">Parcours Professionnel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes expériences à travers mes trois domaines de prédilection. 
            Utilisez les filtres ci-dessous pour explorer chaque facette.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Experience['category'])}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={cn(
                "rounded-full px-6 py-6 text-base gap-2 transition-all duration-300",
                activeTab === tab.id ? "scale-105 shadow-md" : "hover:bg-primary/5"
              )}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          {filtered.map((exp, index) => (
            <Card 
              key={exp.id} 
              className="animate-in fade-in zoom-in duration-500 border-none shadow-sm hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none">
                    {exp.period}
                  </Badge>
                </div>
                <CardTitle className="font-headline text-xl leading-tight">
                  {exp.title}
                </CardTitle>
                <p className="text-accent font-medium">{exp.organization}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed text-foreground/80">
                      • {item}
                    </li>
                  ))}
                </ul>
                {exp.qualities && (
                  <div className="pt-4 flex flex-wrap gap-2">
                    {exp.qualities.map(q => (
                      <span key={q} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-accent/5 text-accent rounded">
                        {q}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}