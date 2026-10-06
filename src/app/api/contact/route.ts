import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    const resendApiKey = process.env.RESEND_API_KEY
    const destinationEmail = process.env.CONTACT_EMAIL || 'alejandra31500@gmail.com'

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "La variable RESEND_API_KEY n'est pas renseignée sur Vercel." },
        { status: 500 }
      )
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Alejandra <onboarding@resend.dev>',
        to: [destinationEmail],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; line-height: 1.5;">
            <h2>Nouveau message de contact</h2>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Objet :</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />
            <p><strong>Message :</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      }),
    })

    const resData = await res.json()

    if (!res.ok) {
      return NextResponse.json(
        { error: resData.message || "Erreur de transfert vers Resend." },
        { status: res.status }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Erreur serveur lors du traitement." },
      { status: 500 }
    )
  }
}
