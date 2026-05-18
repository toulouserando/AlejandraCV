"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { skillSynchronizer, type SkillSynchronizerOutput } from "@/ai/flows/skill-synchronizer"
import { Brain, Loader2, Sparkles, CheckCircle, Info } from "lucide-react"

export function AISyncTool() {
  const [jobDescription, setJobDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<SkillSynchronizerOutput | null>(null)

  const handleSync = async () => {
    if (!jobDescription.trim()) return
    setLoading(true)
    try {
      const output = await skillSynchronizer({ jobDescription })
      setResult(output)
    } catch (error) {
      console.error("AI Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="ai-sync" className="py-24 px-6 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" /> Propulsé par GenAI
          </div>
          <h2 className="font-headline text-4xl font-bold mb-4 text-accent">Career Synchronizer</h2>
          <p className="text-muted-foreground">
            Copiez-collez une fiche de poste et laissez l'IA analyser comment mon profil 
            peut répondre à vos besoins spécifiques.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-lg overflow-hidden border-none">
            <CardHeader className="bg-white border-b">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Brain className="w-5 h-5 text-primary" /> Analyseur de Profil
              </CardTitle>
              <CardDescription>Entrez la description du poste ci-dessous</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <Textarea
                placeholder="Description du poste, missions, profil recherché..."
                className="min-h-[150px] resize-none border-none bg-secondary/20 focus-visible:ring-primary"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
              <Button 
                onClick={handleSync} 
                disabled={loading || !jobDescription}
                className="w-full h-12 rounded-full font-bold shadow-md hover:shadow-lg transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyse en cours...
                  </>
                ) : (
                  <>Synchroniser mon profil</>
                )}
              </Button>
            </CardContent>
          </Card>

          {result && (
            <div className="space-y-6 animate-in slide-in-from-bottom duration-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2 text-primary">
                      <CheckCircle className="w-4 h-4" /> Atouts clés identifiés
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {result.relevantSkills.map((skill, i) => (
                      <div key={i} className="text-sm py-1 border-b last:border-0 border-primary/10">
                        {skill}
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2 text-primary">
                      <CheckCircle className="w-4 h-4" /> Expériences en adéquation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {result.relevantExperiences.map((exp, i) => (
                      <div key={i} className="text-sm py-1 border-b last:border-0 border-primary/10 italic">
                        {exp}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card className="border-none shadow-lg bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Info className="w-5 h-5" /> Pourquoi Alejandra ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base leading-relaxed font-medium">
                    {result.explanation}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}