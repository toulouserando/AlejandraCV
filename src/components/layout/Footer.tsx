import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t bg-secondary/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="font-headline text-2xl font-bold text-accent">
            Alejandra<span className="text-primary"> CV</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            © {currentYear} Alejandra Erazo Moreno. <br className="md:hidden" />
            Tous droits réservés.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/privacy" className="hover:text-primary transition-colors">Confidentialité</Link>
          <Link href="/legal" className="hover:text-primary transition-colors">Mentions légales</Link>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground italic">
            "S'élever par le savoir, grandir par l'éveil."
          </p>
        </div>
      </div>
    </footer>
  )
}
