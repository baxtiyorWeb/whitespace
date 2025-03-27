"use client"
import QueryProvider from "@/providers/QueryProvider";
import "@radix-ui/themes/styles.css";
import { usePathname, useRouter } from "next/navigation"; // Next.js uchun navigation hook
import { useEffect } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token && pathname !== "/auth") {
      router.push("/auth");
    }
  }, [pathname, router]);

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
