import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const androgyDemo = localFont({
  src: "../public/fonts/AndrogyDemo.ttf",
  variable: "--font-androgy-demo",
});

const typeMachine = localFont({
  src: "../public/fonts/TypeMachine.ttf",
  variable: "--font-type-machine",
});

export const metadata: Metadata = {
  title: "Towns And Seas",
  description: "Each space is designed to reflect a story, a journey, and a deep connection to its cultural roots. By merging the vibrancy of towns with the tranquility of the seas, we create environments that are not just places to live or work, but destinations that reflect the soul of diverse cultures. With every project, we aim to bring life, personality, and a sense of global identity to our developments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="3xrIpTe7r2I599FqhUuqScx1uvGvwLMYE4aR0kcIcZg"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      {/* Add both font variables to the body */}
      <body className={`${androgyDemo.variable} ${typeMachine.variable} antialiased bg-[#F9EFE8]`}>
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}