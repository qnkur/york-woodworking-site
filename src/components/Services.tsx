import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from "@mantine/core"
import {
  IconGauge,
  IconUser,
  IconCookie,
  IconSchool,
  IconBuildingStore,
  IconHome,
} from "@tabler/icons-react"
import classes from "./FeaturesCards.module.css"
import { ServicesBanner } from "./ServicesBanner"
import { CarouselCard } from "./CarouselCard"

const mockdata = [
  {
    title: "Institutional",
    description:
      "High-traffic millwork built to last for schools, clinics, and government buildings.",
    icon: IconSchool,
  },
  {
    title: "Commercial",
    description: "Custom fixtures and displays for retail and office spaces.",
    icon: IconBuildingStore,
  },
  {
    title: "Residential",
    description: "Custom cabinetry and furniture for homes and apartments.",
    icon: IconHome,
  },
]

export function Services() {
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon style={{ width: rem(40), height: rem(40) }} stroke={1.5} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ))

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Our services
      </Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Our team will work closely with you to understand your needs and deliver
        personalized woodworking solutions with exceptional craftsmanship,
        reliability, and subcontracting capabilities.
      </Text>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
      <ServicesBanner />
    </Container>
  )
}
