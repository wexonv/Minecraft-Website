import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { config, getThemeColor } from "@/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: config.seo.title,
  description: config.seo.description,
  metadataBase: new URL(config.links.website),
  alternates: {
    canonical: config.links.website,
  },
  keywords: config.seo.keywords,
  openGraph: {
    title: config.server.name,
    description: config.seo.description,
    url: config.links.website,
    type: "website",
    images: [
      {
        url: config.seo.ogImage,
        width: 1200,
        height: 630,
        alt: config.server.name,
      },
    ],
    siteName: config.server.name,
    locale: config.seo.locale,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    yandex: "YANDEX_VERIFICATION_CODE",
  },
};

export const viewport = {
  themeColor: getThemeColor(),
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.server.name,
    url: config.links.website,
    potentialAction: {
      "@type": "SearchAction",
      target: `${config.links.website}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="pl">
      <head>
        <link rel="icon" href={config.favicon.ico} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={config.favicon.png32}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={config.favicon.png16}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={config.favicon.appleTouch}
        />
        <link rel="manifest" href={config.favicon.webmanifest} />
        <meta name="msapplication-TileColor" content={getThemeColor()} />
        <meta name="theme-color" content={getThemeColor()} />
      </head>
      <body className={inter.className}>
        {children}

        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

// WRITED BY WWW.WEXON.TOP