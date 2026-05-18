import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alejandra CV - Alejandra Erazo Moreno',
  description: 'Portfolio professionnel d\'Alejandra Erazo Moreno - Enseignement, Petite Enfance et Vente.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Alegreya:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
