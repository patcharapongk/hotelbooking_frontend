import type { Metadata } from "next";
import { Inter, Inder } from "next/font/google";
import { getServerSession } from "next-auth";
import NextAuthProvider from "@/providers/NextAuthProvider";
import "./globals.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "700"],
});
const inder = Inder({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inder",
  weight: "400",
});

export const metadata: Metadata = {
  title: "SleepSpot :: Find a place to sleep",
  description: "Find a place to sleep with SleepSpot",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${inder.variable} ${inter.variable} font-sans`}>
        <NextAuthProvider session={session}>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
