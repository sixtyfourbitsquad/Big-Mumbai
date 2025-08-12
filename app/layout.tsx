import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Big Mumbai Game - Play, Connect & Win Amazing Rewards',
  description: 'Join Big Mumbai Game for exciting interactive challenges, real-time community chat, and amazing rewards. Play anytime, anywhere with India\'s most engaging gaming platform.',
  keywords: 'online games, mobile gaming, indian gaming platform, interactive challenges, gaming community, rewards, entertainment',
  authors: [{ name: 'Big Mumbai Game' }],
  creator: 'Big Mumbai Game',
  publisher: 'Big Mumbai Game',
  robots: 'index, follow',
  metadataBase: new URL('https://bigmumbai.game'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bigmumbai.game',
    title: 'Big Mumbai Game - Play, Connect & Win Amazing Rewards',
    description: 'Join Big Mumbai Game for exciting interactive challenges, real-time community chat, and amazing rewards. Play anytime, anywhere with India\'s most engaging gaming platform.',
    siteName: 'Big Mumbai Game',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Big Mumbai Game - Interactive Gaming Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Mumbai Game - Play, Connect & Win Amazing Rewards',
    description: 'Join Big Mumbai Game for exciting interactive challenges, real-time community chat, and amazing rewards. Play anytime, anywhere with India\'s most engaging gaming platform.',
    creator: '@bigmumbai',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://bigmumbai.game/#organization",
                  "name": "Big Mumbai Game",
                  "url": "https://bigmumbai.game",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://bigmumbai.game/images/logo.png"
                  },
                  "sameAs": [
                    "https://twitter.com/bigmumbai",
                    "https://facebook.com/bigmumbai",
                    "https://instagram.com/bigmumbai"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bigmumbai.game/#website",
                  "url": "https://bigmumbai.game",
                  "name": "Big Mumbai Game",
                  "description": "India's premier interactive gaming and entertainment platform",
                  "publisher": {
                    "@id": "https://bigmumbai.game/#organization"
                  },
                  "inLanguage": "en-IN"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://bigmumbai.game/#webpage",
                  "url": "https://bigmumbai.game",
                  "name": "Big Mumbai Game - Play, Connect & Win Amazing Rewards",
                  "isPartOf": {
                    "@id": "https://bigmumbai.game/#website"
                  },
                  "about": {
                    "@id": "https://bigmumbai.game/#organization"
                  },
                  "description": "Join Big Mumbai Game for exciting interactive challenges, real-time community chat, and amazing rewards. Play anytime, anywhere with India's most engaging gaming platform.",
                  "inLanguage": "en-IN"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}