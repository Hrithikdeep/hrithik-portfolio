import type { Metadata, Viewport } from "next";
import "@/styles.css";

function getSiteUrl() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://hrithik.dev").origin;
  } catch {
    return "https://hrithik.dev";
  }
}

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Hrithik — Full Stack Engineer | Real Systems, Shipped",
  description:
    "Hrithik is a full stack engineer building scalable web apps, ERP systems, and platforms used by 10,000+ users. React, Node.js, PostgreSQL, AWS.",
  keywords: [
    "Full Stack Engineer",
    "React Developer",
    "Node.js Developer",
    "Web Developer",
    "Software Engineer",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Hrithik" }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Hrithik — Full Stack Engineer | Real Systems, Shipped",
    description:
      "Scalable web apps, ERP systems, and platforms shipped to production.",
    siteName: "Hrithik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hrithik — Full Stack Engineer",
    description: "Scalable web apps, ERP systems, and platforms shipped to production.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
