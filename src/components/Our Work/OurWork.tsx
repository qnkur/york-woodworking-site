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
  Button,
  Center,
} from "@mantine/core"
import {
  IconGauge,
  IconUser,
  IconCookie,
  IconSchool,
  IconBuildingStore,
  IconHome,
} from "@tabler/icons-react"
import classes from "./OurWork.module.css"
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

export function OurWork() {
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
    <Container size="xl" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Our work
      </Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Explore our portfolio showcasing a diverse range of woodworking projects
        that highlight our craftsmanship and dedication to quality.
      </Text>
      <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl" mt={50}>
        <CarouselCard title="School name" description="Description" />
        <CarouselCard title="School name" description="Description" />
        <CarouselCard title="School name" description="Description" />
        <CarouselCard title="School name" description="Description" />
      </SimpleGrid>
      <Center mt="xl">
        <Button>View all projects</Button>
      </Center>
    </Container>
  )
}
