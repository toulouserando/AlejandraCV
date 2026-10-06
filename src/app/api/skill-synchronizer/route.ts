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

    const output = await skillSynchronizer({ jobDescription })
    return NextResponse.json(output)
  } catch (error: any) {
    console.error("Erreur lors de la synchronisation IA:", error)
    return NextResponse.json(
      { error: error?.message || "Une erreur est survenue lors de l'analyse par l'IA." },
      { status: 500 }
    )
  }
}
