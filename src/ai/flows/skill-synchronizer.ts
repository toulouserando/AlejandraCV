'use server';
/**
 * @fileOverview A Genkit flow for matching Alejandra's skills and experiences to a job description.
 *
 * - skillSynchronizer - A function that takes a job description and returns relevant skills and experiences.
 * - JobDescriptionInput - The input type for the skillSynchronizer function.
 * - SkillSynchronizerOutput - The return type for the skillSynchronizer function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const JobDescriptionInputSchema = z.object({
  jobDescription: z.string().describe('The job description to analyze.'),
});
export type JobDescriptionInput = z.infer<typeof JobDescriptionInputSchema>;

const SkillSynchronizerOutputSchema = z.object({
  relevantSkills: z.array(z.string()).describe(
    "Alejandra's soft skills and qualities that are most relevant to the job description."
  ),
  relevantExperiences: z.array(z.string()).describe(
    "Alejandra's professional experiences that are most relevant to the job description, summarized briefly."
  ),
  relevantEducation: z.array(z.string()).describe(
    "Alejandra's education and certifications that are most relevant to the job description, summarized briefly."
  ),
  explanation: z.string().describe(
    "A concise explanation of why the identified skills, experiences, and education fit the job description, highlighting transferable skills."
  ),
});
export type SkillSynchronizerOutput = z.infer<typeof SkillSynchronizerOutputSchema>;

export async function skillSynchronizer(input: JobDescriptionInput): Promise<SkillSynchronizerOutput> {
  return skillSynchronizerFlow(input);
}

const ale_profile_context = `
Alejandra's Profile Summary:

**Soft Skills & Qualities (Exhaustive List):**
Accueillante, Altruïste, Appliquée, Attentive, Autonome, Avenante, Aventureuse, Bibliophile, Calme, Combative, Communicative, Compréhensive, Concentrée, Conciliante, Confiante, Consciencieuse, Coopérative, Cultivée, Curieuse, Décidée, Déterminée, Disciplinée, Disponible, Dynamique, Éclairée, Éduquée, Endurante, Enthousiaste, Épanouie, Érudite, Fidèle, Flexible, Généreuse, Impliquée, Intuitive, Joueuse, Méfiante, Motivée, Observatrice, Organisée, Ouverte, Passionnée, Patiente, Polyvalente, Ponctuelle, Précise, Qualifiée, Rapide, Réactive, Réfléchie, Régulière, Responsable, Sage, Sociable, Stable, Studieuse, Travailleuse, Vaillante, Vigilante, Volontaire.

**Qualities as Strengths ("Défauts tournés en atouts")**:
- Impatience -> Dynamisme & Réactivité sur le terrain.
- Trop critique -> Esprit d'analyse & Rigueur pédagogique.
- Sensible -> Empathie & Écoute (atout majeur pour le non-verbal).
- Exigeante -> Excellence & Qualité (sécurité et apprentissage).
- Peur de l'échec -> Détermination & Persévérance.

**Professional Experiences:**
- **Pédagogie & Enseignement:**
  - Intervenante pédagogique niveaux A1-C2 (espagnol, BILINGUE 31, 04/2023 - Aujourd'hui).
  - Enseignante d'espagnol L1 (Liceo Campestre Thomas de Iriarte, Colombie, 02/2016 - 11/2016).
  - Enseignante d'espagnol L1 et français FLE (Colegio San Bonifacio, Colombie, 09/2012 - 11/2014).
  - Stage professionnel enseignante espagnol L1 et anglais (Colegio Republica de Colombia, Colombie, 01/2013 - 11/2014).

- **Petite Enfance & Animation:**
  - Accompagnante éducative petite enfance (Crèche Municipale Empalot, 04/2023 - 08/2023).
  - Accompagnante éducative petite enfance (Kangourou Kids, 09/2018 - 03/2023).
  - Animatrice de séjour (Ligue de l'Enseignement 31, 07/2018 - 08/2018).
  - Stage animatrice (Accueil de Loisirs Associé École Jean de la Fontaine, 04/2023 - 08/2023).

- **Commerce & Relation Client (Vente):**
  - Vendeuse / Conseillère de vente aux États-Unis (2015 - 2018). Implique des compétences en relation client, négociation, gestion d'objectifs, sens du service, gestion de caisse, merchandising.

**Education & Certifications:**
- Master 2 Français Langues Étrangères (Université Toulouse Jean Jaurès, 2024-2025).
- Diplôme Universitaire Didactique du FLE (Université Toulouse Jean Jaurès, 2020-2021).
- CAP Accompagnant Éducatif Petite Enfance (Académie de Toulouse - Kiwi Institute, 2019-2021).
- Licence en Éducation Mention Sciences Humaines et Sociales et Langues (Universidad Libre Colombie, 2010-2014).

**Research & Publications:**
- Publication scientifique: "Incidencia de la lecture de The cat in the hat del Dr. Seuss en la producción oral de lengua inglesa" (2014). This highlights research, analytical, and critical thinking skills.
`

const prompt = ai.definePrompt({
  name: 'skillSynchronizerPrompt',
  input: { schema: JobDescriptionInputSchema },
  output: { schema: SkillSynchronizerOutputSchema },
  prompt: `You are an AI career consultant. Your task is to analyze a given job description and identify the most relevant skills, experiences, and education from Alejandra's profile.
Provide a concise explanation of their fit, focusing on transferable skills and how her unique background (teaching/pedagogy, early childhood/animation, and sales/customer relations) makes her a strong candidate.

Alejandra's complete profile is provided below. Do not invent any skills or experiences not present in this profile. Keep the summaries brief and to the point.

${ale_profile_context}

Job Description:
{{{jobDescription}}}

Based on the above job description and Alejandra's profile, identify the most relevant skills, experiences, and education, and explain the fit.`,
});

const skillSynchronizerFlow = ai.defineFlow(
  {
    name: 'skillSynchronizerFlow',
    inputSchema: JobDescriptionInputSchema,
    outputSchema: SkillSynchronizerOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
