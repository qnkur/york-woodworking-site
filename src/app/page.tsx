import Image from "next/image"
import styles from "./page.module.css"
import { Box, Stack } from "@mantine/core"
import Header from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { FooterLinks } from "@/components/FooterLinks"

export default function Home() {
  return (
    <Stack gap={0}>
      <Header />
      <Hero />
      <Services />
      <FooterLinks />
    </Stack>
  )
}
