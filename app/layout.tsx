import "./globals.css";

import { Footer } from "./footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-auto max-w-2xl dark:text-gray-100">
        <main className="min-h-screen p-6 pt-3 md:pt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
