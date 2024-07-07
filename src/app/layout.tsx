import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "@mantine/core/styles.css"

import { ColorSchemeScript, MantineProvider } from "@mantine/core"

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
