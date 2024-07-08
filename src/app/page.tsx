"use client"
import Image from "next/image"
import styles from "./page.module.css"
import { Box, Stack, Text } from "@mantine/core"
import { Hero } from "@/components/Hero/Hero"
import Header from "@/components/Header/Header"
import { Services } from "@/components/Services/Services"
import { FooterLinks } from "@/components/Footer/FooterLinks"
import { OurWork } from "@/components/Our Work/OurWork"
import ContactUs from "@/components/Contact/ContactUs"
import { useState } from "react"

export default function Home() {
  const [section, setSection] = useState("home")
  function handleSectionChange(section: string) {
    setSection(section)
    const el = document.getElementById(section)
    const isMobile = window.innerWidth < 990
    const offset = isMobile ? 120 : 72
    if (el) {
      // el.scrollIntoView({ behavior: "smooth" })
      // scroll smoothly to el with offset
      window.scrollBy({
        top: el.getBoundingClientRect().top - offset,
        behavior: "smooth",
      })
    }
  }
  return (
    <Stack gap={0}>
      <Header onSectionChange={handleSectionChange} section={section} />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="our-work">
        <OurWork />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>
      <FooterLinks />
    </Stack>
  )
}
