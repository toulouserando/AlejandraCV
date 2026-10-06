import { NextResponse } from "next/server"
import { skillSynchronizer } from "@/ai/flows/skill-synchronizer"

export async function POST(req: Request) {
  try {
    const { jobDescription } = await req.json()

    if (!jobDescription || typeof jobDescription !== "string") {
      return NextResponse.json(
        { error: "Veuillez fournir une description de poste valide." },
        { status: 400 }
      )
    }

    // Injection d'une consigne de langue stricte dans le texte transmis à l'IA
    const constrainedJobDescription = `[CONSIGNE OBLIGATOIRE DE LANGUE : Tu dois répondre EXCLUSIVEMENT en français. Traduis tous les mots, concepts et compétences en français, même si la fiche de poste ci-dessous est en anglais.]\n\n${jobDescription}`

    const output = await skillSynchronizer({ jobDescription: constrainedJobDescription })
    return NextResponse.json(output)
  } catch (error: any) {
    console.error("Erreur lors de la synchronisation IA:", error)
    return NextResponse.json(
      { error: error?.message || "Une erreur est survenue lors de l'analyse par l'IA." },
      { status: 500 }
    )
  }
}
