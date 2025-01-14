import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

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
    <AuthProvider>
      <html lang="en" data-theme="light" className="sm:bg-gray-100 scroll-smooth">
        <body
          className={`antialiased`}
        >
          <div className="bg-white sm:shadow-md mx-auto rounded-md max-w-sm min-h-svh container dd">
            {children}
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
