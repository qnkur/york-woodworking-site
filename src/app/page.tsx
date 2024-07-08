"use client"
import Header from "@/components/Header/Header"
import { Services } from "@/components/Services/Services"
import { FooterLinks } from "@/components/Footer/FooterLinks"
import { OurWork } from "@/components/Our Work/OurWork"
import ContactUs from "@/components/Contact/ContactUs"
import { useState, useEffect } from "react"
import { Hero } from "@/components/Hero/Hero"

export default function Home() {
  const [section, setSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sectionThreshold = 150
      const sections = ["home", "services", "our-work", "contact-us"]
      const currentSection = sections.find((sectionId) => {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          return (
            rect.top < window.innerHeight - sectionThreshold &&
            rect.bottom > sectionThreshold
          )
        }
        return false
      })
      if (currentSection && currentSection !== section) {
        setSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [section])

  // Function to handle section change on click
  const handleSectionChange = (newSection: any) => {
    setSection(newSection)
    // Optionally, scroll to the section
    const el = document.getElementById(newSection)
    const isMobile = window.innerWidth < 990
    const offset = isMobile ? 130 : 72
    if (el) {
      // el.scrollIntoView({ behavior: "smooth" })
      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: "smooth",
      })
    }
  }

  return (
    <div>
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
    </div>
  )
}
