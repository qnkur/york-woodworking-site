import Image from "next/image"
import styles from "./page.module.css"
import { Box, Stack } from "@mantine/core"
import { Hero } from "@/components/Hero/Hero"
import Header from "@/components/Header/Header"
import { Services } from "@/components/Services/Services"
import { FooterLinks } from "@/components/Footer/FooterLinks"
import { OurWork } from "@/components/Our Work/OurWork"
import ContactUs from "@/components/Contact/ContactUs"

export default function Home() {
  return (
    <Stack gap={0}>
      <Header />
      <Hero />
      <Services />
      <OurWork />
      <ContactUs />
      <FooterLinks />
    </Stack>
  )
}
