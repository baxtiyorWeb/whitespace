"use client"
import QueryProvider from "@/providers/QueryProvider";
import "@radix-ui/themes/styles.css";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <QueryProvider>
          <div className="grow-0">{children}</div>
        </QueryProvider>
      </body>
    </html>
  );
}
