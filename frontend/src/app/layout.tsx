import NavBar from "@/components/navigation/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Finance Tracker",
  description:
    "The Personal Finance Tracker is a web application that helps users manage their finances by tracking income, expenses, and savings goals. It will provide users with an overview of their financial situation through visual reports and insights, with the option to set and monitor their budget.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
