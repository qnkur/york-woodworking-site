import type { Metadata } from "next"
import "./globals.css"
import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import { EB_Garamond } from "next/font/google"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"

const eb_Garamond = EB_Garamond({ subsets: ["latin"] })

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
      <body className={eb_Garamond.className}>
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
