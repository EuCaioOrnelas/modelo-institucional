import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Clínica Marcelo Daltro - Odontologia de Excelência",
  description: "Clínica odontológica especializada em tratamentos de alta qualidade para toda a família.",
    
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <link rel="icon" href="/logo.ico" sizes="any" />
      <body className={inter.className}>
      
          <Navbar />
          <main className="min-h-screen bg-azule text-ouro selection:bg-branco">{children}</main>
          <Footer />
 
      </body>
    </html>
  )
}


import './globals.css'