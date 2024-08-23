import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContactFormWrapper from "./providers/ContactForm/ContactFormWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact App",
  description: "An app for managing contacts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContactFormWrapper>{children}</ContactFormWrapper>
      </body>
    </html>
  );
}
