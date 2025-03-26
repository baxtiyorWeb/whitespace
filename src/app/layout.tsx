import QueryProvider from "@/providers/QueryProvider";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
