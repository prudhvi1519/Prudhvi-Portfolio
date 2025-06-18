import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ubuntu } from "./fonts";

export const metadata: Metadata = {
  title: "Prudhvi Akula - Portfolio",
  description: "Portfolio website of Prudhvi Akula, a Full-Stack Developer and Cloud Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload font to ensure it loads early */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&style=normal;italic&display=swap"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-ubuntu ${ubuntu.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
