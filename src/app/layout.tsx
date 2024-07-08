import type { Metadata } from "next"
import "./globals.css"
import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import { EB_Garamond, Lora, Playfair_Display } from "next/font/google"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"

const eb_Garamond = EB_Garamond({ subsets: ["latin"] })
const lora = Lora({ subsets: ["latin"] })
const playfair_Display = Playfair_Display({ subsets: ["latin"] })

export const metadata = {
  title: "York Woodworking | Home",
}

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
      <body className={lora.className}>
        <MantineProvider
          theme={{
            primaryColor: "gray",
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
